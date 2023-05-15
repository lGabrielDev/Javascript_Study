//criando objetos "pokemons"
const pokemonEagle = {
    name : "eagle",
    informacao1 : "Consegue voar",
    informacao2 : "Veloz e sagaz",
};


const pokemonFox = {
    name : "fox",
    informacao1 : "Anda na floresta",
    informacao2 : "Esperta e ligeira"
}


const pokemonBear = {
    name : "bear",
    informacao1 : "Grande e forte",
    informacao2 : "Destrutivo"
}


const pokemonLion = {
    name : "lion",
    informacao1 : "Rei da selva",
    informacao2 : "Rugido feroz"
}



//function para exibir as informacoes do pokemon

//selecionams a div contendo as informacoes do pokemn
function mostrarInformacoesPokemon(pokemon){
    //selecionamos a div contendo as informacoes do pokemon
    const ul = document.querySelector("div.informacoesDoPokemon");


    //selecionamos cada "li"
    const informacao1 = document.querySelector("li.informacao_1");
    const informacao2 = document.querySelector("li.informacao_2");
    
    //alterando o conteudo de cada "li".
    informacao1.textContent = pokemon.informacao1;
    informacao2.textContent = pokemon.informacao2;


    //mostramos a div que estava com display "none"
    ul.style.display = "block"; 
    
}




//function para alterar as imagens
function changeImage(idDaImagem){
    
    //selecionamos o elemento que vamos alterar
    const image = document.querySelector("img#" + idDaImagem); // O elemento "img" que vamos selecionar vai depender do id que o usuario passar, quando chamar o method.


    //selecionamos cada imagem. Se o usuário escolher "lion", vamos alterar para a fotinha do lion e setar todas as outras images para a fotinha "random". Sacou??
    const imageEagle = document.querySelector("#eagle");
    const imageFox = document.querySelector("#fox");
    const imageBear = document.querySelector("#bear");
    const imageLion = document.querySelector("#lion");


    //alteramos a fotinha da "eagle", e todas as outras alteramos para a fotinha "random"
    if(idDaImagem === "eagle"){
        image.setAttribute("src", "https://img.icons8.com/?size=512&id=8-u0Qq1jv9mX&format=png");

        imageFox.setAttribute("src",  "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");
        imageBear.setAttribute("src", "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");
        imageLion.setAttribute("src", "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");

        //chamamos a function para mostrar as informacoes do pokemon
        mostrarInformacoesPokemon(pokemonEagle);

    }
    //alteramos a fotinha da "fox", e todas as outras alteramos para a fotinha "random"
    else if(idDaImagem === "fox"){
        image.setAttribute("src", "https://img.icons8.com/?size=512&id=40811&format=png");

        imageBear.setAttribute("src",  "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");
        imageLion.setAttribute("src", "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");
        imageEagle.setAttribute("src", "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");

        //chamamos a function para mostrar as informacoes do pokemon
        mostrarInformacoesPokemon(pokemonFox);

    }
    //alteramos a fotinha da "bear", e todas as outras alteramos para a fotinha "random"
    else if(idDaImagem === "bear"){
        image.setAttribute("src", "https://img.icons8.com/?size=512&id=yPTcBK5dVgwT&format=png");
        
        imageFox.setAttribute("src",  "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");
        imageEagle.setAttribute("src", "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");
        imageLion.setAttribute("src", "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");

        //chamamos a function para mostrar as informacoes do pokemon
        mostrarInformacoesPokemon(pokemonBear);
    }
    //alteramos a fotinha da "lion", e todas as outras alteramos para a fotinha "random"
    else if(idDaImagem === "lion"){
        image.setAttribute("src", "https://img.icons8.com/?size=512&id=120346&format=png");

        imageFox.setAttribute("src",  "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");
        imageBear.setAttribute("src", "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");
        imageEagle.setAttribute("src", "https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png");

        //chamamos a function para mostrar as informacoes do pokemon
        mostrarInformacoesPokemon(pokemonLion);
    }
}