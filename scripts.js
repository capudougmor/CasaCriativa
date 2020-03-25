document
    .querySelector("button.fat")//seleciona um elemento
    .addEventListener("click", function(){//procura uma acao e faz uma funçao
        document
            .querySelector("#footer")//procura um elemento
            .classList//adiciona uma class
            .toggle("hide")//alterna entre os estilos
    })