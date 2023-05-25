<h1 align="center">
    Dark mode
</h1>

Crie o exercício Abaixo:

<img src="../images/dark_mode_example.gif" alt="gif image exapmle" width="450px">

<br>

- html
    ```html
    <body>
        <div class="container">
            <!-- Dark Mode button -->
            <ion-icon class="sunIcon" name="sunny"></ion-icon>
            <!-- title -->
            <h1 class="title">Dark/Light Mode</h1>
            <!-- conteudo -->
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem totam praesentium eaque et porro, suscipit cupiditate doloribus rem nulla iste sapiente rerum! Nulla amet at pariatur, est odio aliquam cum enim cumque nihil veritatis</p>
        </div>
        
        <!-- JS external -->
        <script src="./js/script.js"></script>

        <!-- ion icons -->
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </body>
    ```

<br>

- css
    ```css
    /* css colors variables */
    :root{
        --corFundo:white;
        --corTexto:black;
    }

    /* configs padraozin */
    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: var(--corFundo); /* vamos mudar essas cores */
        color: var(--corTexto); /* vamos mudar essas cores */
    }

    .container{
        width: 500px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    .sunIcon{
        font-size: 6rem;
    }

    .title{
        font-size: 2rem;
    }

    .text{
        font-size: 1.2em;
        text-align: justify;
    }


    /* seletor para modificar a cor das variables */
    .darkMode{
        --corFundo:black;
        --corTexto:white;
    }
    ```
    
    <br>


- js

    ```js
    //selecionamos o "body"
    const body = document.querySelector("body");

    //selecionamos o button
    const button = document.querySelectorAll(".sunIcon")[0]; // o primeiro button da class "tal"



    //criamos o "click" event
    button.addEventListener("click", function(){

        body.classList.toggle("darkMode"); //alteramos a cor

        //Se o darkMode estiver ativo, salvamos um item no "localStorage". Assim, salvamos um item no navegador.
        if(body.classList.contains("darkMode")){
            localStorage.setItem("tema", "darkMode"); //cria uma variable no navegador. Mesmo se recarregarmos a pagina, essa variable nao se perde.
        }
        //Se o darkMode nao tiver ativo, removemos a variable do "localStorage/navegador"
        else{
            localStorage.removeItem("tema");
        }
    });


    //criamos uma variable para representar um item do "localStorage"
    const temaEscolhido = localStorage.getItem("tema");

    //se existir um item/variable no "localStorage/navegador" chamada "tema", colocamos o darkMode
    if(temaEscolhido != null){
        body.classList.toggle("darkMode");
    }
    ```

<br>
<br>

