//Definição de variaveis
/*
Qual o valor total com base no 1º item?
Qual o valor total com base no 2º item?
*/

// Começando aplicação com valores zerados, porque os produtos estão zerados. 
//Valor Total = soma do que esta adicionando de produto
//Arrays a serem preenchidos
let valorTotal = [0,0]
let valorProduto = [50.00, 30.00]
let qtd = [0,0] 

//Adicionando um item
function adicionarItem(item) {
  let quantidade = document.getElementById('quantidade' + item)
  let total = document.getElementById('total' + item)
  qtd[item] += 1
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]
  quantidade.innerHTML = qtd[item] //quantidade será mostrada no array
  total.innerHTML = valorTotal[item].toFixed(2)
}

//Removendo um item
function removerItem(item){
  if (qtd[item] > 0){
    qtd[item]  -= 1
    let quantidade = document.getElementById('quantidade' + item)
    let total = document.getElementById('total' + item)
    quantidade.innerHTML = qtd[item] //quantidade será mostrada no array
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]
    total.innerHTML = valorTotal[item].toFixed(2)
  }
}