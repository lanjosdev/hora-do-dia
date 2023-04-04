let agora = new Date();
let hora = agora.getHours();
let minuto = agora.getMinutes();

let periodo;
let nome = prompt('Olá, qual seu nome?: ');

const resulText1 = document.querySelector('div.resulText:nth-child(1)');
const resulText2 = document.querySelector('div.resulText:nth-child(2)');
const img = document.querySelector('#imagem');


if(hora < 12) {
    periodo = 'Bom dia';
    img.src = './images/manha.jpg';
    document.body.style.background = '#d0b77a';
} else if(hora < 18) {
    periodo = 'Boa tarde';
    img.src = './images/tarde.jpg';
    document.body.style.background = '#197aaf';
} else {
    periodo = 'Boa noite';
    img.src = './images/noite.jpg';
    document.body.style.background = '#041754';
}

if(minuto < 10) {
    minuto = '0' + minuto;
}

resulText1.innerHTML = `<strong>${periodo} ${nome}!</strong>`;
resulText2.innerHTML = `Agora são <strong>${hora}:${minuto} horas</strong>.`;