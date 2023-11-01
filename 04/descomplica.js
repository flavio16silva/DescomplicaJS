// Criando elementos no HTML pelo JS
let novoElemento = document.createElement('div') //criando o elemento
novoElemento.innerText = 'Novo elemento criado pelo JS'
novoElemento.style.background = 'green'
document.body.append(novoElemento) //adicionando o elemento no body