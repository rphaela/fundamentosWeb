// Script Index


// Script Contato

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('.mapa')

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let txtNome = document.querySelector('#txtNome');
txtNome.innerHTML = '&nbsp;';

let txtEmail = document.querySelector('#txtEmail');
txtEmail.innerHTML = '&nbsp;';

let txtAssunto = document.querySelector('#txtAssunto');
let count = 0;
txtAssunto.innerHTML = `Quantidade de caracteres: ${count}/100`;

function validaNome () {
    if (nome.value.length >= 3) {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.marginBottom = '15px'
        txtNome.style.color = 'var(--green)'
        nome.style.borderBottom = '3px solid var(--green)'
        nome.style.color = 'var(--black)'
        nomeOk = true;
             
    }
    else {
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.marginBottom = '15px'
        txtNome.style.color = 'var(--dRed)'
        nome.style.borderBottom = '3px solid var(--dRed)'
        nome.style.color = 'var(--black)'
        nomeOk = false;
    }
}


function validaEmail() {
  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

  if (email.value.match(regex)){
    email.style.borderBottom = '3px solid var(--green)';
    email.style.color = 'var(--black)';
    txtEmail.innerHTML = 'E-mail válido';
    txtEmail.style.marginBottom = '15px'
    txtEmail.style.color = 'var(--green)'
    emailOk = true;

  }
  
  else {
    email.style.borderBottom = '3px solid var(--dRed)';
    email.style.color = 'var(--black)';
    txtEmail.innerHTML = 'E-mail inválido';
    txtEmail.style.marginBottom = '15px'
    txtEmail.style.color = 'var(--dRed)'
    emailOk = false;
  }
}

// function validaEmail() {
//   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
//     email.style.borderBottom = '3px solid var(--dark-red)';
//     email.style.color = 'var(--dark-red)';
//     txtEmail.innerHTML = 'email inválido';
//     emailOk = false;
//   } else {
//     email.style.borderBottom = '3px solid var(--green)';
//     email.style.color = 'var(--green)';
//     txtEmail.innerHTML = 'email válido';
//     emailOk = true;
//   }
// }


function validaAssunto() {
  count = assunto.value.length;
  txtAssunto.innerHTML = `Quantidade de caracteres: ${count}/100`;
  txtAssunto.style.marginBottom = '15px'

  if (assunto.value.length <= 100) {
    assunto.style.borderBottom = '3px solid var(--green)'
    assunto.style.color = 'var(--black)'
    assunto.style.backgroundColor = 'transparent'
    assuntoOk = true;
  }

  else {
    assunto.style.borderBottom = '3px solid var(--dRed)'
    assunto.style.color = 'var(--black)'
    assunto.style.backgroundColor = 'var(--dRed)'
    assuntoOk = false;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert(msg.innerHTML = "Sua mensagem foi enviada com sucesso!")
    setTimeout('document.location.reload(true)', 2000)
  }
  
  else {
    alert(msg.innerHTML = 'Preencha os campos corretamente antes de enviar!')
    setTimeout('document.location.reload(true)', 2000)
  }
}

function timer() {
    setTimeout('enviar()', 1500)
}

function zoomIn() {
    mapa.style.width = '600px'
    mapa.style.height = '400px'
}

function zoomOut() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}


