import { expect, test } from '@playwright/test';

test('o painel mostra a grade e o progresso', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#welcomeView')).toBeVisible();
  await expect(page.locator('#gradeProgressoTexto')).toContainText('aulas publicadas');
  expect(await page.locator('#menuList .modulo-item').count()).toBeGreaterThan(1);
});

test('a busca filtra as aulas e avisa quando não acha nada', async ({ page }) => {
  await page.goto('/');
  await page.locator('#buscaAula').fill('zzzz-nao-existe');
  await expect(page.locator('#menuVazio')).toBeVisible();
});

test('abrir uma aula carrega o conteúdo e Esc volta ao painel', async ({ page }) => {
  await page.route('**/modulo-*/**', (r) => r.fulfill({ contentType: 'text/html', body: '<h1>Aula</h1>' }));
  await page.goto('/');
  await page.getByRole('button', { name: /aulas publicadas/ }).first().click();
  await page.getByRole('link', { name: /^Aula 1: / }).first().click();
  await expect(page.locator('#aulaFrame')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#welcomeView')).toBeVisible();
});

async function abrirPrimeiraAula(page) {
  await page.goto('/');
  await page.getByRole('button', { name: /aulas publicadas/ }).first().click();
  await page.getByRole('link', { name: /^Aula 1: / }).first().click();
}

test('aula que não existe mostra o erro e volta ao painel', async ({ page }) => {
  await page.route('**/modulo-*/**', (r) => r.fulfill({ status: 404, body: 'não achou' }));
  await abrirPrimeiraAula(page);
  await expect(page.locator('#erroAulaView')).toBeVisible();
  await expect(page.locator('#erroAulaMotivo')).toContainText('404');
  await expect(page.locator('#aulaFrame')).toBeHidden();
  await expect(page.locator('#erroAulaTentar')).toBeFocused();
  await page.getByRole('button', { name: 'Voltar ao painel' }).click();
  await expect(page.locator('#welcomeView')).toBeVisible();
});

test('sem rede, a aula avisa e "Tentar de novo" abre quando a rede volta', async ({ page }) => {
  let falhar = true;
  await page.route('**/modulo-*/**', (r) => (falhar ? r.abort() : r.fulfill({ contentType: 'text/html', body: '<h1>Aula</h1>' })));
  await abrirPrimeiraAula(page);
  await expect(page.locator('#erroAulaMotivo')).toContainText('Sem conexão');
  falhar = false;
  await page.locator('#erroAulaTentar').click();
  await expect(page.locator('#aulaFrame')).toBeVisible();
  await expect(page.locator('#erroAulaView')).toBeHidden();
});

test('em 375 px não há rolagem horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');
  await expect(page.locator('#welcomeView')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
});

test('módulo fechado não deixa o Tab cair em aula invisível', async ({ page }) => {
  await page.goto('/');
  const modulo = page.getByRole('button', { name: /^Módulo 1:/ });
  await expect(modulo).toHaveAttribute('aria-expanded', 'false');
  await modulo.focus();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: /^Módulo 2:/ })).toBeFocused();
  await modulo.focus();
  await page.keyboard.press('Enter');
  await expect(modulo).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: /^Aula 1: / })).toBeFocused();
});

// Fluxo principal de ponta a ponta, sem simular o conteúdo: a tarefa da #17 ("abra a aula de Promises")
test('o aluno busca "Promises", abre a aula real e volta ao painel', async ({ page, context }) => {
  await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, (r) => r.abort());
  await page.goto('/');
  await page.locator('#buscaAula').fill('Promises');
  const link = page.getByRole('link', { name: /Assincronicidade e Promises/ }).first();
  await expect(link).toBeVisible();
  await link.click();
  await expect(page.locator('#aulaFrame')).toBeVisible();
  const aula = page.frameLocator('#aulaFrame');
  await expect(aula.locator('h1')).toHaveText('Aula 5: Assincronicidade e Promises');
  await page.keyboard.press('Escape');
  await expect(page.locator('#welcomeView')).toBeVisible();
});

// #27: apagar a busca devolve os módulos ao estado de antes
test('apagar a busca devolve os módulos ao estado de antes', async ({ page }) => {
  await page.goto('/');
  const modulo1 = page.getByRole('button', { name: /^Módulo 1:/ });
  const modulo2 = page.getByRole('button', { name: /^Módulo 2:/ });
  await modulo2.click();
  await expect(modulo2).toHaveAttribute('aria-expanded', 'true');

  await page.locator('#buscaAula').fill('arrays');
  await expect(modulo1).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#modulo-2')).toBeHidden();
  await page.locator('#buscaAula').fill('');

  await expect(modulo1).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#modulo-1 .aulas-sublist a').first()).toBeHidden();
  await expect(modulo2).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#modulo-2 .aulas-sublist a').first()).toBeVisible();

  await modulo1.click();
  await expect(modulo1).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#modulo-1 .aulas-sublist a').first()).toBeVisible();
});

// #22: link direto para cada aula
test('abrir uma aula muda o endereço para #aula-N', async ({ page }) => {
  await page.route('**/modulo-*/**', (r) => r.fulfill({ contentType: 'text/html', body: '<h1>Aula</h1>' }));
  await page.goto('/');
  await page.locator('#buscaAula').fill('Promises');
  await page.getByRole('link', { name: /Assincronicidade e Promises/ }).first().click();
  await expect(page.locator('#aulaFrame')).toBeVisible();
  await expect(page).toHaveURL(/#aula-5$/);
  await page.goBack();
  await expect(page.locator('#welcomeView')).toBeVisible();
  await expect(page.locator('#aulaFrame')).toBeHidden();
});

test('abrir o site com #aula-5 carrega a aula 5 com o módulo aberto, e Esc volta', async ({ page, context }) => {
  await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, (r) => r.abort());
  await page.goto('/#aula-5');
  await expect(page.frameLocator('#aulaFrame').locator('h1')).toHaveText('Aula 5: Assincronicidade e Promises');
  await expect(page.getByRole('button', { name: /^Módulo 1:/ })).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(page.locator('#welcomeView')).toBeVisible();
  await expect(page).not.toHaveURL(/#/);
});

test('#aula com número que não existe mostra o erro e o botão de voltar', async ({ page }) => {
  await page.goto('/#aula-999');
  await expect(page.locator('#erroAulaView')).toBeVisible();
  await expect(page.locator('#erroAulaMotivo')).toContainText('A aula 999 não existe');
  await expect(page.locator('#erroAulaTentar')).toBeHidden();
  const voltar = page.getByRole('button', { name: 'Voltar ao painel' });
  await expect(voltar).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#welcomeView')).toBeVisible();
});

test('aula aberta durante a busca mantém o módulo aberto ao apagar o termo', async ({ page }) => {
  await page.route('**/modulo-*/**', (r) => r.fulfill({ contentType: 'text/html', body: '<h1>Aula</h1>' }));
  await page.goto('/');
  await page.locator('#buscaAula').fill('Promises');
  const link = page.getByRole('link', { name: /Assincronicidade e Promises/ }).first();
  await link.click();
  await page.locator('#buscaAula').fill('');
  await expect(page.getByRole('button', { name: /^Módulo 1:/ })).toHaveAttribute('aria-expanded', 'true');
  await expect(link).toBeVisible();
});

test('colar #aula-N na barra com o site aberto abre a aula', async ({ page }) => {
  await page.route('**/modulo-*/**', (r) => r.fulfill({ contentType: 'text/html', body: '<h1>Aula</h1>' }));
  await page.goto('/');
  await expect(page.locator('#welcomeView')).toBeVisible();
  await page.evaluate(() => { location.hash = '#aula-12'; });
  await expect(page.locator('#aulaFrame')).toBeVisible();
  await expect(page.locator('#aulaFrame')).toHaveAttribute('src', /modulo-2-frontend-moderno\/aula-12-props-comunicacao\/index\.html$/);
  await expect(page).toHaveURL(/#aula-12$/);
});
