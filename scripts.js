/*ligar e deslicar o formulario*/
function onOff() {
    document
    .querySelector("#modal")//procura um elemento
    .classList//adiciona uma class
    .toggle("hide")//alterna entre os estilos

    document
    .querySelector("body")
    .classList
    .toggle("hideScroll")

    document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")
}

function newIdeia() {
    
}
/*segundo metodo
document
    .querySelector(".fat")//seleciona um elemento
    .addEventListener("click", function(){//procura uma acao e faz uma funçao
        document
            .querySelector("footer")//procura um elemento
            .classList//adiciona uma class
            .toggle("hide")//alterna entre os estilos
    })*/
