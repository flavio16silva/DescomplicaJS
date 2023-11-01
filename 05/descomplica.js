//Criando listas e seus elementos filhos
let lista = document.getElementById('lista') //pegando o elemento
let li = document.createElement('li')         //criando a "li"
li.textContent = 'Beta'                       //criando o texto dentro da li
lista.appendChild(li)                         //adicionando um filho no UL




//Array de times
times = ["Real", "Benfica", "Juventus", "Barça", "Inter"]
let listatimes = document.querySelector('ul.listatime')

for(let i = 0; i < times.length; i++){        //varrendo o array
  let time = times[i]                         //varrendo os times pelo indice do array e colocando o nome
  let listItem = document.createElement('li') //cria o li
  listItem.innerText = time                   //inserir o nome do time
  listItem.style.border = '1px solid red'     //define a borda
  listatimes.appendChild(listItem)            //adicionado time na lista
}