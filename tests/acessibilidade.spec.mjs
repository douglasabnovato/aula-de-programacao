import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

// Critério 8 do docs/MVP.md: axe sem violações WCAG A e AA, em largura de desktop,
// com a grade real (cursos.js) e a aula real no iframe. O app não tem tema escuro
// próprio (não há prefers-color-scheme no CSS), por isso não há teste no escuro.
const regras = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

test.use({ viewport: { width: 1280, height: 800 } });

test.beforeEach(async ({ context }) => {
  // Fonte e vídeos de fora não entram no teste
  await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, (r) => r.abort());
});

async function violacoes(page) {
  const { violations } = await new AxeBuilder({ page }).withTags(regras).analyze();
  return violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
}

test('axe: painel inicial sem violações', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#gradeProgressoTexto')).toContainText('aulas publicadas');
  expect(await violacoes(page)).toEqual([]);
});

test('axe: busca com módulo aberto sem violações', async ({ page }) => {
  await page.goto('/');
  await page.locator('#buscaAula').fill('Promises');
  await expect(page.getByRole('link', { name: /Assincronicidade e Promises/ }).first()).toBeVisible();
  expect(await violacoes(page)).toEqual([]);
});

test('axe: aula real aberta sem violações', async ({ page }) => {
  await page.goto('/');
  await page.locator('#buscaAula').fill('Promises');
  await page.getByRole('link', { name: /Assincronicidade e Promises/ }).first().click();
  await expect(page.frameLocator('#aulaFrame').locator('h1')).toHaveText('Aula 5: Assincronicidade e Promises');
  expect(await violacoes(page)).toEqual([]);
});

test('axe: tela de erro da aula sem violações', async ({ page }) => {
  await page.route('**/modulo-*/**', (r) => r.fulfill({ status: 404, body: 'não achou' }));
  await page.goto('/');
  await page.locator('#buscaAula').fill('Promises');
  await page.getByRole('link', { name: /Assincronicidade e Promises/ }).first().click();
  await expect(page.locator('#erroAulaView')).toBeVisible();
  expect(await violacoes(page)).toEqual([]);
});
