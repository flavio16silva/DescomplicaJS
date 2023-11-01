const listaEstilo = document.querySelectorAll('.estilo')
for (i = 0; i < listaEstilo.length; i++){
  listaEstilo[i].style.background = 'blue'
  listaEstilo[i].style.color = 'white'
  listaEstilo[i].innerText = listaEstilo[i].innerText.toUpperCase()
}