function askUsername() {
  return prompt('Quel est votre nom d\'utilisateur ?')
}   

function redirectUser() {
  return new Promise((resolve, reject) => {
    let username = askUsername()

    if ('admin' === username) {
      resolve()
    } else {
      reject()
    }
  })
}

function success() {
  alert('Vous êtes administrateur, vous pouvez accéder à la page')
}

function error() {
  alert('Vous n\'avez pas été reconnu comme étant un administrateur')
}

redirectUser().then(success, error)