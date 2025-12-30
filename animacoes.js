// const elementos = document.querySelectorAll(".blocoHabilidades");

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visivel");
//     }
//   });
// }, { threshold: 0.2 });

// elementos.forEach(el => observer.observe(el));

gsap.registerPlugin(ScrollTrigger);

// Configuração padrão
gsap.defaults({
duration: 0.6,
ease: "power3.out"
});

// Função utilitária para animar seções
function animarSecao(trigger, elementos, options = {}) {
gsap.timeline({
    scrollTrigger: {
    trigger,
    start: "top 70%",
    toggleActions: "play none none none"
    }
})
.to(trigger, { opacity: 1, duration: 0.1 })
.from(elementos, {
    y: 30,
    opacity: 0,
    stagger: 0.15,
    ...options
});
}


gsap.timeline()
.to("#capa", { opacity: 1, duration: 0.1 })
.from("#capa .imagem", {
    y: 30,
    opacity: 0
})
.from("#capa .informacoes h1", {
    y: 20,
    opacity: 0,
    stagger: 0.15
}, "-=0.3")
.from("#capa .informacoes span, #capa .botoes", {
    y: 20,
    opacity: 0
}, "-=0.2");


animarSecao(
"#sobre-mim",
"#sobre-mim h2, #sobre-mim .informacoes > *"
);


animarSecao(
"#servicos",
"#servicos h2, #servicos > .conteudo > span, #servicos .caixa",
{ scale: 0.95 }
);


animarSecao(
"#habilidades",
"#habilidades h2, #habilidades .blocoHabilidades"
);

animarSecao(
"#resumo",
"#resumo h2, #resumo .trabalho, #resumo .estudo"
);

animarSecao(
"#contato",
"#contato h3, #contato .botao",
{ scale: 0.9 }
);


gsap.from("header a", {
y: -10,
opacity: 0,
stagger: 0.1,
duration: 0.4,
ease: "power2.out"
});


if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.globalTimeline.clear();
}
