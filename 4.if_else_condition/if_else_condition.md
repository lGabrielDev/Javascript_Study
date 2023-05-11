<h1 align="center">
    if else
    <img src="https://cdn-icons-png.flaticon.com/512/4394/4394632.png" alt="image icon" width="90px" align="center">
</h1>
  
Igualzinho ao Java, aqui também vamos seguir o padraozin.

- `if` --> Se tal condition for true, faz isso.
- `else if` --> Se não... Se tao condition for true, faz isso
- `else` --> Caso contrário, faz isso.

<br>

✏️ Faça um programinha. Se a idade da pessoa for maior ou igual 18, ele pode beber. Caso contrário, menor de idade.

```js
let age = 150;

if(age >= 18){
    document.getElementById("titleBolado").innerHTML = "Pode beber a vontade!";
}
else if(age == 17){
    document.getElementById("titleBolado").innerHTML = "Quase lá...";
}
else{
    document.getElementById("titleBolado").innerHTML = "menor de idade não pode beber";
}
```

<br>
<br>



✏️ Faça um programinha:

- Numero entre 0 e 10 --> Numeros legais
- Numero entre 11 e 99 --> Numeros grandin
- Numero maior que 100 --> Numeros Grandao


```js
let number = 5;

//number between 0 and 10
if(number >=0 && number <= 10){
    console.log("Numero perfeito de trabalhar");
}
else{
    //number between 11 and 99
    if(number < 100){
        console.log("Numero grandin");
    }
    //number equal or greater than 100
    else{
        console.log("Numero GRANDAO");
    }
}
```

<br>
<br>

<!-- next page buttons -->
[<img src="https://img.icons8.com/?size=512&id=47092&format=png" alt="next page button" width="70px" align="right">](../5.switch_case_condition/0.switch_case.md)