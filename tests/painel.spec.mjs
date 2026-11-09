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
  await page.locator('#menuList .modulo-toggle[aria-label*="aulas publicadas"]').first().click();
  await page.getByRole('link', { name: /^Aula 1: / }).first().click();
  await expect(page.locator('#aulaFrame')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#welcomeView')).toBeVisible();
});

async function abrirPrimeiraAula(page) {
  await page.goto('/');
  await page.locator('#menuList .modulo-toggle[aria-label*="aulas publicadas"]').first().click();
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
  const modulo = page.locator('#menuList .modulo-toggle[aria-label^="Módulo 1"]');
  await expect(modulo).toHaveAttribute('aria-expanded', 'false');
  await modulo.focus();
  await page.keyboard.press('Tab');
  await expect(page.locator('#menuList .modulo-toggle[aria-label^="Módulo 2"]')).toBeFocused();
  await modulo.focus();
  await page.keyboard.press('Enter');
  await expect(modulo).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: /^Aula 1: / })).toBeFocused();
});
