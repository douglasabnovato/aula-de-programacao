import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

// Critério 8 do docs/MVP.md (#34): axe WCAG A e AA em todas as aulas com
// status "disponivel" em cursos.js, abertas direto pela página da aula,
// em largura de desktop. Fontes da web e vídeos externos ficam bloqueados.
// O teste exige o assets/aula.css carregado: sem ele, o contraste seria medido
// na página sem estilo e passaria sem medir nada.
const regras = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

const contexto = {};
vm.runInNewContext(`${readFileSync('cursos.js', 'utf8')}\nthis.grade = gradeCurricular;`, contexto);
const aulas = contexto.grade.flatMap((m) => m.aulas).filter((a) => a.status === 'disponivel');

test.use({ viewport: { width: 1280, height: 800 } });

test.beforeEach(async ({ context }) => {
  await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, (r) => r.abort());
});

test('a grade tem as 70 aulas disponíveis', () => {
  expect(aulas).toHaveLength(70);
});

for (const aula of aulas) {
  test(`axe: aula ${aula.numero} sem violações`, async ({ page }) => {
    const resposta = await page.goto(`/${aula.pasta.replace(/\/$/, '')}/index.html`);
    expect(resposta.status()).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
    const regrasDoCss = await page.evaluate(() =>
      [...document.styleSheets]
        .filter((s) => s.href && s.href.endsWith('/assets/aula.css'))
        .reduce((total, s) => total + s.cssRules.length, 0),
    );
    expect(regrasDoCss, 'assets/aula.css precisa carregar').toBeGreaterThan(0);
    const { violations } = await new AxeBuilder({ page }).withTags(regras).analyze();
    const lista = violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
    expect(lista).toEqual([]);
  });
}
