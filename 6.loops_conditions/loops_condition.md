<h1 align="center">
    Loops
    <img src="https://cdn-icons-png.flaticon.com/512/510/510884.png" alt="image icon" width="90px" align="center">
</h1>


## Index

- [`while`](#while)
- [`do while`](#do-while)
- [`for`](#for)
- [`for of` --> for each do java](#forOfTitle)


<hr>
<br>

## while

✏️ Escreva uma mensagem 4 vezes

```js
let i = 0;

while(i < 4){
    document.getElementById("titleBolado").innerHTML += "fodase <br>" ;
    i++;
}
```

<hr>
<br>

## do while
Funciona bem parecido com o `while`. 

Porém aqui, mesmo se a condicao for false, o bloco de código vai ser executado pelo menos 1 vez.

> "Faça tal coisa... Se a condicao for true, faça denovo..." - lGabrielDev


Imagina um programa de um jogo. O jogo precisa rodar pelo menos uma vez. Se o usuário quiser jogar novamente, o loop acontece.

<br>

### Syntax: <img src="https://cdn-icons-png.flaticon.com/512/1442/1442581.png" alt="curly braces icon" width="20px" align="center">

```java
do {
  // code block to be executed
}
while (condition);
```
<br>

✏️ Escreva uma mensagem 4 vezes


```js
let i = 0;

do{
    document.getElementById("titleBolado").innerHTML += "salve! <br>";
    i++;
}
while(i < 4);
```


<img src="https://cdn-icons-png.flaticon.com/512/2810/2810051.png" alt="imagem" width="50px" align="left">

Sempre que estiver trabalhando com loops, crie variables booleanas.



<hr>
<br>

## for

Padraozin java. Geralmente usamos para executar um bloco de código determinado número de vezes.



```js
const animals = ["cat", "dog", "pig"];

for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}
```

<br>
<br>

✏️ Escreva uma mensagem 4 vezes

```js
for(let i = 0; i < 4; i++){
    document.write("fodase" + "<br>");
}
```

<hr>
<br>

<h2 id="forOfTitle">for of --> igualzinho o for each do java</h2>

```js
const numbers = [3, 40 , 6];

for(let i of numbers){
    console.log(i);
}
```


<br>
<br>

<!-- next page button -->
[<img src="https://img.icons8.com/?size=512&id=47092&format=png" alt="next page button" width="70px" align="right">](../7.functions_methods/0.functions.md)