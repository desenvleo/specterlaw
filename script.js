// Seção blocos
const section = document.querySelector('.sectionBlocos');
const blocos = document.querySelectorAll('.sectionBlocos .bloco');
const manter = document.querySelectorAll('.areasAtuacao .areasList');


blocos.forEach(bloco => {
    bloco.addEventListener('mouseenter', () => {
        section.classList.add('visible');
        manter.forEach(item => item.classList.add('visible'));
    });
});

// Seção áreas de atuação
const areasAtuacaoSection = document.querySelector('.areasAtuacao');
areasAtuacaoSection.addEventListener('mouseenter', () => {
    manter.forEach(item => item.classList.add('visible'));
});

// Navbar
var navItems = document.querySelectorAll('.navbar li');
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function (event) {
        event.stopPropagation();
        var balloon = this.querySelector('div');
        if (!balloon) return;

        if (balloon.classList.contains('show')) {
            balloon.classList.remove('show');
        } else {
            for (var j = 0; j < navItems.length; j++) {
                var otherBalloon = navItems[j].querySelector('div');
                if (otherBalloon) {
                    otherBalloon.classList.remove('show');
                }
            }
            balloon.classList.add('show');
        }
    });
}

// Fecha balões clicando fora
document.addEventListener('click', function () {
    navItems.forEach(item => {
        const balloon = item.querySelector('div');
        if (balloon) balloon.classList.remove('show');
    });
});

// Botões dos formulários
const btns = document.querySelectorAll('.primeirobutton');
const formNewsletter = document.querySelector('.formnewsletter');
const formConsulta = document.querySelector('.formconsulta');

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (!btn.classList.contains('segundobutton')) {
            formNewsletter.classList.toggle('mostrar');
            formConsulta.classList.remove('mostrar');
        } else {
            formConsulta.classList.toggle('mostrar');
            formNewsletter.classList.remove('mostrar');
        }
    });
});

const formularios = document.querySelectorAll('.formularios form');

formularios.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Informações enviadas com sucesso!');
        form.reset();
    });
});

function atualizarTexto() {
    const p = document.getElementById("botaocontato")
    if (window.matchMedia("(orientation: portrait)").matches) {
        p.textContent = "CONTATO";

    } else {
        p.textContent = "Entre em Contato";
    }
}
window.addEventListener('resize', atualizarTexto);
atualizarTexto();

