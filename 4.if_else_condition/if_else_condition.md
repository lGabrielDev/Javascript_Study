<!-- title -->
<h1 align="center">
    <span>if else</span>
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

- Numero menor que 0 --> Numero negative
- Numero entre 0 e 10 --> Numeros legais
- Numero entre 11 e 100 --> Numeros grandin
- Numero maior que 100 --> Numeros Grandao


```js
const number = 565;

if(number < 0){
    console.log("negative number...");
}
else{
    if(number >=0 && number <= 10){
        console.log("Perfect number to work with");
    }
    else if(number <= 100){
        console.log("numero grandin");
    }
    else{
        console.log("numero GRANDAO");
    }
}
```

<br>
<br>

<!-- next page buttons -->
[<img src="https://img.icons8.com/?size=512&id=47092&format=png" alt="next page button" width="70px" align="right">](../5.switch_case_condition/0.switch_case.md)