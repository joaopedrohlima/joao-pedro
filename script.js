// Lógica dos botões do carrossel
const carrossel = document.querySelector('.carrossel');
const btnPrev = document.querySelector('.carrossel-btn.prev');
const btnNext = document.querySelector('.carrossel-btn.next');

if (carrossel && btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
        const scrollAmount = carrossel.clientWidth >= 768 ? 370 : 320;
        carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    btnNext.addEventListener('click', () => {
        const scrollAmount = carrossel.clientWidth >= 768 ? 370 : 320;
        carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Revelar letras
const profissoes = [
    'Desenvolvedor Web Full-Stack',
    'Designer Gráfico'
];

const titulo = document.querySelector("#capa .segundo-texto");

let indiceProfissao = 0;
let indiceLetra = 0;
let digitando = true;

function digitar() {
    const profissaoAtual = profissoes[indiceProfissao];

    if (digitando) {
        titulo.textContent += profissaoAtual[indiceLetra];
        indiceLetra++;

        if (indiceLetra >= profissaoAtual.length) {
            digitando = false;
            setTimeout(digitar, 2000);
        } else {
            setTimeout(digitar, 80);
        }
    } else {
        titulo.textContent = titulo.textContent.slice(0, -1);
        indiceLetra--;

        if (indiceLetra < 0) {
            digitando = true;
            indiceProfissao = indiceProfissao === 0 ? 1 : 0;
            indiceLetra = 0;
            setTimeout(digitar, 500);
        } else {
            setTimeout(digitar, 50);
        }
    }
}

digitar();