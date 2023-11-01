//Pegando pelo ID
//Element - refere-se a pegar um valor único. 
elementoDiv = document.getElementById("conteudo")
elementoDiv.innerHTML = `<h3>Novo Titulo aqui dentro</h3>`

//Pegando pelo Name
elementoDivName = document.getElementsByName('divconteudo')[1]
elementoDivName.style.color = 'blue'
elementoDivName.innerText = ` <p>Colocando um texto </p>`

//Pegando pelo nome da Classe
elementoDivClass = document.getElementsByClassName('mensagem')[2]
elementoDivClass.style.color = 'red'
elementoDivClass.innerText = ` <p>Mais uma mensagem </p>`

//pegando pelo elemento e class
elementoSpanClass = document.querySelector('span.novo')
elementoSpanClass.style.color = 'green'