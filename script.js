const texto = "🗝️\n\Você está pronto para descobrir o que... \n\Se faz sentir?";

let indice = 0;


function escreverTexto() {

    const elemento = document.getElementById("texto");

    if (indice < texto.length) {

    elemento.innerHTML += texto.charAt(indice);

        indice++;

        setTimeout(escreverTexto, 120);

    } else {

        setTimeout(() => {

            document.getElementById("senhaArea")
            .classList.remove("escondido");

        }, 1000);

    }

}



function verificarSenha() {

    const senhaDigitada =
    document.getElementById("senha").value;


    const senhaCorreta = "Fazsentido09";


    if (senhaDigitada === senhaCorreta) {


        document.getElementById("inicio")
        .classList.add("escondido");


        document.getElementById("historia")
        .classList.remove("escondido");


    } else {


        document.getElementById("erro")
        .innerHTML =
        "Ainda não...";


    }

}



function abrirEmail() {

    window.open(
        "https://proton.me/",
        "_blank"
    );

}



window.onload = escreverTexto;