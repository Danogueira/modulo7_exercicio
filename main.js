function maiorq (num1, num2) {
const form = document.querySelector("form"); 
    return num2 > num1;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const teste = document.getElementById(num1);
    const teste2 = document.getElementById(num2);
    if teste2 > teste {
        alert("Segundo numero e maior que o primeiro");
    } else
    alert("Campo invalido")
})
