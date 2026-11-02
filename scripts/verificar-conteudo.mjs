// Falha se uma aula marcada como disponível apontar para uma pasta sem index.html no Git.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const arquivos = new Set(execFileSync('git', ['ls-tree', '-r', '--name-only', 'HEAD'], { encoding: 'utf8', maxBuffer: 1e8 }).split('\n'));
const contexto = {};
vm.runInNewContext(`${readFileSync('cursos.js', 'utf8')}\nthis.grade = gradeCurricular;`, contexto);
const aulas = contexto.grade.flatMap((m) => m.aulas).filter((a) => a.status === 'disponivel');
const faltando = aulas.filter((a) => !arquivos.has(`${a.pasta.replace(/\/$/, '')}/index.html`)).map((a) => a.pasta);
if (faltando.length) {
  console.error('Aulas disponíveis sem página:', faltando);
  process.exit(1);
}
console.log(`${aulas.length} aulas disponíveis conferidas`);
