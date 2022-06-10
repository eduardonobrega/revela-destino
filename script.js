let button = document.getElementsByTagName('button')[0];
let input = document.getElementsByTagName('input')[0];
let h3 = document.getElementById('resposta')

let respostas = [
    'Certeza!',
    'Não tenho tanta certeza.',
    'É decididamente assim.',
    'Não conte com isso.',
    'Sem dúvidas!',
    'Pergunte novamente mais tarde.',
    'Sim, definitivamente!',
    'Minha resposta é não.',
    'Você pode contar com isso.',
    'Melhor não te dizer agora.',
    'A meu ver, sim.',
    'Minhas fontes dizem não.',
    'Provavelmente.',
    'Não é possível prever agora.',
    'Perspectiva boa.',
    'As perspectivas não são tão boas.',
    'Sim.',
    'Concentre-se e pergunte novamente.',
    'Sinais apontam que sim.',
];

button.addEventListener('click', () => {
    let pergunta = input.value;
    if(pergunta == '') {
        alert('Faça uma pergunta')
    }else {
        h3.innerHTML = `<div>${pergunta}</div>`
        let numeroAleatorio = Math.floor(Math.random() * respostas.length)
        h3.innerHTML += respostas[numeroAleatorio]
        show()
        let time = setTimeout(hidden, 3000)
        
    }
});

function hidden() {
    h3.className = 'hidden'
}

function show() {
    h3.className = 'show'
}
