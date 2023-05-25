<h1 align="center">
    LocalStorage
    <img src="https://img.icons8.com/?size=512&id=bEVnsZmOTWIY&format=png" alt="image icon" width="90px" align="center">
</h1>


Recurso para criarmos variables no navegador/computador do usuário. Assim, mesmo ao recarregar ou fechar a página os dados ainda continuam.

Esses dados ficam na aba `Application` do *inspect/inspecionar* do navegador.

Um bom exemplo para utilizar o localStorage, seria para aplicar o **Dark Mode** na sua página.


<br>


## Criando uma variable

Por padrão, criamos uma variable simples, onde temos 1 key e 1 value. Esse value é uma String.

```js
//criamos 2 variables dentro do "localStorage"/navegador/pc do usuário
localStorage.setItem("naruto", "naruto zica memo"); //key and value
localStorage.setItem("sakura", "sakura bolada"); //key and value

//acessamos essas variables
const personagem1 = localStorage.getItem("naruto");
const personagem2 = localStorage.getItem("sakura");

//printamos no console
console.log(personagem1);
console.log(personagem2);
```

<hr>
<br>

## Criando uma variable Objeto
Podemos também criar uma variable mais complexa para armazenar no localStorage. Em outras palavras, conseguimos criar um objeto dentro do localStorage.


```js
//criamos um objeto
const personagem = {
    name: "naruto",
    age: 23,
    vila: "folha"
}

//Armazenamos no "localStorage" / navegador / computador do usuário.
localStorage.setItem("heroi", JSON.stringify(personagem));


//acessamos a variable no "localStorage"
const personagemInsano = localStorage.getItem("heroi");


//printamos no console
console.log(JSON.parse(personagemInsano));
```

💡 Perceba que para conseguirmos criar esse objeto lá dentro da localStorage, precisamos usar a class `JSON`. Como o localStorage só pode armazenar `String`, precisamos transformar o objeto em String, antes de armazená-lo.

- `JSON.stringify();` --> Transforma um objeto em String. 

- `JSON.parse();` --> Transforma uma String em objeto JSON.

<hr>
<br>

## Exercise 

✏️ Crie o seguinte exercício:


![](../images/local_storage_example.gif);


Vamos usar uma variable criada no localStorage para manipular nossos elementos. Se a variable existir, fazemos isso. Se nao, fazemos isso.

<br>



- html

    ```html
    <body>
        <!-- div formulario -->
        <div id="containerFormulario">
            <h2>Login Bolado</h2>
            <form action="#" id="formulario">
                <label for="inputName">Name:</label>
                <input type="text" id="inputName" placeholder="Digite seu nome" name="name">
                <button id="enviarButton" type="submit">Enviar</button>
            </form>
        </div>

        <!-- div mensagem boas vindas -->
        <div id="boasVindasContainer">
            Bem vindo, <span id="boasVindasSpan">nome da pessoa</span>!
            <button id="sairButton">Sair</button>
        </div>
    </body>
    ```


<br>

- js

    ```js
    //selecionando os elementos que vamos usar
    const formulario = document.querySelector("#containerFormulario");
    const inputName = document.querySelector("#inputName");
    const submitButton = document.querySelector("#enviarButton");
    const mensagemBoasVindas = document.querySelector("#boasVindasContainer");
    const textoSpan = document.querySelector("#boasVindasSpan");
    const sairButton = document.querySelector("#sairButton");


    /* ------------ function para alterar as divs ------------ */
    function alterarDivs(divFormulario, divMensagemBoasVindas){
        const usuarioLogado = localStorage.getItem("usuario");

        //se a variable dentro do localStorage existir...
        if(usuarioLogado != null){
            divFormulario.style.display = "none"; //esconde o form
            divMensagemBoasVindas.style.display = "block"; //mostra mensagem de boas vindas

            //substituimos o span de boas vindas, para o nome inputado
            textoSpan.textContent = localStorage.getItem("usuario");
        }
        else{
            divFormulario.style.display = "block"; //mostra o form
            divMensagemBoasVindas.style.display = "none"; //esconde a mensagem
        }
    }


    /* ------------ criando "click" event parao "submitButton" ------------ */
    submitButton.addEventListener("click", function(e){
        e.preventDefault(); //vamos tratar esse submit button como um button qualquer.

        //criamos uma variable dentro do "localStorage"
        localStorage.setItem("usuario", inputName.value);


        //chamamos a function para mostrar e esconder as divs
        alterarDivs(formulario, mensagemBoasVindas);
    });



    /* ------------ criando "click" event parao "sairButton" ------------ */
    sairButton.addEventListener("click", function(){
        //removemos a variable.
        localStorage.removeItem("usuario");

        alterarDivs(formulario, mensagemBoasVindas);
    });



    /* ------------ chamamos a function. Assim, sempre que carregar a pagina, essa function é acionada. ------------ */
    alterarDivs(formulario, mensagemBoasVindas);
    ```
