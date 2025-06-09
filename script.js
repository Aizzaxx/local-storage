let btn = document.querySelector("#btn")
let user = document.querySelector("#user")
let welcome = document.querySelector("#welcome")
let exit = document.querySelector("#exit")

/*localStorage.setItem("username", "Aizza")*/

/*let username = localStorage.getItem("username")*/

/*localStorage.removeItem("username")*/

const sair = () => {
    localStorage.removeItem("username")
    welcome.innerHTML = "Faça seu login!"
}

exit.addEventListener("click", sair)
function pegarNome() {
    localStorage.setItem("username", user.value)
    let username = localStorage.getItem("username")

    if (username.trim() != "") {
        welcome.innerHTML = `Olá ${username}, Seja Bem-vindo!`
    }


}

function pegarValorlocal() {
    let username = localStorage.getItem("username")

    if (username == null) {
        welcome.innerHTML = "Faça seu login"
    } else {
        welcome.innerHTML = `Olá ${username}, Seja Bem-vindo!`
    }


}
pegarValorlocal()

btn.addEventListener("click", pegarNome)