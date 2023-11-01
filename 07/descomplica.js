//Pegar valor de campos do formulário
function pegaValor(){
  let campoNome = document.getElementById('nome')
  alert('Seu nome é ' + campoNome.value) //pega o valor digitado em .nome, ou seja no formaulario
}

//Validando Formulário - Outra forma de pegar o id
  function validarForm(){
    let nomePessoa = document.forms['formCadastro']['nome'].value
      if(nomePessoa == ""){
          alert('Informe seu nome!')
          event.preventDefault()   //manter na mesma página, sem carregar
      }else {
          alert(" Seja bem Vindo! " + nomePessoa)
          event.preventDefault()  //manter na mesma página, sem carregar
      } 

  }
