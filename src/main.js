const caixaDeTexto = document.getElementById('texto');
const botaoCriptografar = document.getElementById('criptografar');
const botaoDescriptografar = document.getElementById('descriptografar');
const caixaDeTextoCriptografado = document.getElementById(
  'texto-criptografado'
);
const botaoCopiar = document.getElementById('copiar');
const requisitoTexto = document.getElementById('requisitos-texto');
const regex = /[A-ZÀ-ÖØ-Ýà-öø-ÿ]/;
const resultareaid = document.getElementById('result_areaid');

const chavesCriptografia = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

const chaveDiscriptografia = {
  enter: 'e',
  imes: 'i',
  ai: 'a',
  ober: 'o',
  ufat: 'u',
};

botaoCriptografar.addEventListener('click', criptografarTexto);
function criptografarTexto() {
  const texto = caixaDeTexto.value;
  if (regex.test(texto)) {
    requisitoTexto.classList.add('blink-animation');
    return;
  }

  const criptografa = texto
    .split('')
    .map((letra) => chavesCriptografia[letra] || letra)
    .join('');
  caixaDeTextoCriptografado.textContent = criptografa;
  caixaDeTextoCriptografado.style.display = 'block';
  resultareaid.style.display = 'none';
  botaoCopiar.disabled = false;
  pararAnimacao();
}

botaoDescriptografar.addEventListener('click', descriptografarTexto);
function descriptografarTexto() {
  const texto = caixaDeTexto.value;
  if (regex.test(texto)) {
    requisitoTexto.classList.add('blink-animation');
    return;
  }
  const regexDescriptografia = new RegExp(
    Object.keys(chaveDiscriptografia).join('|'),
    'g'
  );
  const descriptografa = texto
    .replace(regexDescriptografia, (match) => chaveDiscriptografia[match])
    .split('')
    .map((letra) => chaveDiscriptografia[letra] || letra)
    .join('');

  caixaDeTextoCriptografado.textContent = descriptografa;
  caixaDeTextoCriptografado.style.display = 'block';
  botaoCopiar.disabled = false;
  pararAnimacao();
}

botaoCopiar.addEventListener('click', copiarTexto);
function copiarTexto() {
  const texto = caixaDeTextoCriptografado.textContent;
  navigator.clipboard.writeText(texto);
  caixaDeTextoCriptografado.textContent = 'Texto copiado!';
  botaoCopiar.disabled = true;
}

function pararAnimacao() {
  requisitoTexto.classList.remove('blink-animation');
}
