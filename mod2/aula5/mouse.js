function sobre(){
    var cores = document.getElementById('cores');
    cores.style.background = 'red'
    document.getElementById('log').innerHTML += 'sobre o elemento <br>'
}

function paraBaixo(){
    var cores = document.getElementById('cores');
    cores.style.background = 'green'
    document.getElementById('log').innerHTML += 'clicando no elemento <br>'
}


function saindo(){
    var cores = document.getElementById('cores');
    cores.style.background = 'black'
    document.getElementById('log').innerHTML += 'saindo do elemento <br>'
}

function paraCima(){
    var cores = document.getElementById('cores');
    cores.style.background = 'pink'
    document.getElementById('log').innerHTML += 'soltando o botão de clicar no elemento <br>'
}