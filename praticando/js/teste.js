//criando os objetos - esportes
const soccer = {
    sportName : "soccer",
    informacao1 : "Futebol é o esporte mais jogado do brasil",
    informacao2 : "Neymar é good"
};


const basquete = {
    sportName : "basquete",
    informacao1 : "Basquete é bastante jogado na gringa",
    informacao2 : "Tomelhe cesta!"
};


const skate = {
    sportName : "skate",
    informacao1 : "Skate das ruas",
    informacao2 : "Luan de Oliveira insano"
};


const gym = {
    sportName : "gym",
    informacao1 : "No Pain No Gain",
    informacao2 : "Calisthenics rapá"
};



//function para mostrar bloco de informacoes
function mostrarInformacoes(sport){
    const div = document.querySelector("div.informacoesEsporte");
    div.style.display = "flex"; // retiramos o display none

    //selecionamos as li
    const li1 = document.querySelector("li.informacao1");
    const li2 = document.querySelector("li.informacao2");

    //alteramos o conteudo delas
    li1.textContent = sport.informacao1;
    li2.textContent = sport.informacao2;
}




//selecionamos todas as images
const soccerImage = document.querySelector("#soccerImage");
const basqueteImage = document.querySelector("#basqueteImage");
const skateImage = document.querySelector("#skateImage");
const gymImage = document.querySelector("#gymImage");




//function para alterar as images
function alterarImage(imagem){ //vamos passar o id da imagem
    //soccer
    if(imagem === "soccerImage"){
        soccerImage.setAttribute("src", "https://img.icons8.com/?size=512&id=xsj5Zlx99Bjv&format=png"); // imagem alterada
        basqueteImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random
        skateImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random
        gymImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random

        mostrarInformacoes(soccer); // mostramos as informacoes
    }
    //basquete
    else if(imagem === "basqueteImage"){
        basqueteImage.setAttribute("src", "https://img.icons8.com/?size=512&id=SQrGTj5y0nPq&format=png"); // imagem alterada
        soccerImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random
        skateImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random
        gymImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random

        mostrarInformacoes(basquete); // mostramos as informacoes
    }
    //skate
    else if(imagem === "skateImage"){
        skateImage.setAttribute("src", "https://img.icons8.com/?size=512&id=oT4awrcUiCxN&format=png"); // imagem alterada
        basqueteImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random
        soccerImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random
        gymImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random

        mostrarInformacoes(skate); // mostramos as informacoes
    }
    //gym
    else if(imagem === "gymImage"){
        gymImage.setAttribute("src", "https://img.icons8.com/?size=512&id=65485&format=png"); // imagem alterada
        basqueteImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random
        soccerImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random
        skateImage.setAttribute("src", "https://img.icons8.com/?size=512&id=UDDUYWPLoNks&format=png"); // random

        mostrarInformacoes(gym); // mostramos as informacoes
    }

}


//criando o evento de click para cada button

    //soccer
    const soccerButton = document.querySelector(".soccerButton");
    soccerButton.addEventListener("click", function(){
        alterarImage("soccerImage");
    });


    //soccer
    const basqueteButton = document.querySelector(".basqueteButton");
    basqueteButton.addEventListener("click", function(){
        alterarImage("basqueteImage");
    });


    //skate
    const skateButton = document.querySelector(".skateButton");
    skateButton.addEventListener("click", function(){
        alterarImage("skateImage");
    });


    //gymn
    const gymButton = document.querySelector(".gymButton");
    gymButton.addEventListener("click", function(){
        alterarImage("gymImage");
    });