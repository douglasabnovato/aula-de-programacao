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

test('em 375 px não há rolagem horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');
  await expect(page.locator('#welcomeView')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
});
