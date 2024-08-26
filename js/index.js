const timeDelay = 4000;
const cryptBtn = document.getElementById('btn-crypt');
const decryptBtn = document.getElementById('btn-decrypt');

const preResposta = document.getElementsByClassName('previousAnswers');
const resposta = document.getElementsByClassName('answers');
const resultado = document.getElementsByClassName('resultText');

const alerta = document.getElementsByClassName('warnings');

const copiar = document.getElementById('btn-copy');
const colar = document.getElementById('btn-toPaste');

const textArea = document.getElementById('phrase');

cryptBtn.addEventListener('click', () => {

  if (textArea.value === '') {
    alerta[0].innerHTML = '<i class="mif-cross-light"></i> Digite algo para ser criptografado';
    alerta[0].style.display = 'block';
    alerta[0].classList.add('error');
    setTimeout(() => {
      alerta[0].style.display = 'none';
    }, 3000);
  } else {
    resultado[0].innerText = textArea.value.toLowerCase()
      .replace(/e/gi, 'enter') // Usando o escape i a verificação ignora o case do caractere
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat')
    ;
    preResposta[0].style.display = 'none';
    resposta[0].style.display = 'flex';
    textArea.value = '';
    copiar.classList.add('answers');
    copiar.innerHTML = '<i class="mif-clipboard"></i> Copiar!  ';
    copiar.style.display = 'flex';
  }
});

decryptBtn.addEventListener('click', () => {
  if (textArea.value === '') {
    alerta[0].innerHTML = '<i class="mif-cross-light"></i> Digite algo para ser descriptografado';
    alerta[0].style.display = 'block';
    preResposta[0].style.display = 'block';
    alerta[0].classList.add('error');
    setTimeout(() => {
      alerta[0].style.display = 'none';
    }, timeDelay);
  } else {

    const frase = textArea.value;
    resultado[0].innerHTML = frase
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

    preResposta[0].style.display = 'block';

    // resposta[0].style.display = 'flex';
    // resultado[0].style.display = 'block';
    copiar.style.display = 'none';
    textArea.value = resultado[0].textContent;
    resultado[0].innerHTML = "";
  }
});

copiar.addEventListener('click', () => {
  const copiado = resultado[0].innerText;
  navigator.clipboard.writeText(copiado).then();
  copiar.innerHTML = '<i class="mif-clipboard"></i> Copiado!  ';
});

colar.addEventListener('click', () => {
  if (navigator.clipboard.readText) {
    navigator.clipboard.readText().then(text => {
      textArea.value = text;
    });
  } else {
    alerta[0].innerHTML = '<i class="mif-cross-light"></i> Não foi possível colar';
    alerta[0].style.display = 'block';
    alerta[0].classList.add('error');
    setTimeout(() => {
      alerta[0].style.display = 'none';
    }, timeDelay);
  }

});

document.addEventListener('DOMContentLoaded', function () {
  copiar.style.display = 'none';
});
