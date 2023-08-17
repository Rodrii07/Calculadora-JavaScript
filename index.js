const txtn1 = document.getElementById("n1")
const signo = document.getElementById("signo")
const txtn2 = document.getElementById("n2")
const btncalcular = document.getElementById("calcular")
const pResultado = document.getElementById("pResultado")

btncalcular.addEventListener("click", calcular)

function calcular(){
    const operacion = signo.value
    const n1 = parseFloat(txtn1.value)
    const n2 = parseFloat(txtn2.value)

    if((operacion == "+" ||operacion == "-"||operacion == "*"||operacion == "/") && !isNaN(n1) && !isNaN(n2)){
        let resultado;
        switch(operacion){
            case "+":
                resultado = n1 + n2
                break;
            case "-":
                resultado = n1 - n2
                break;
            case "*":
                resultado = n1*n2
                break;
            case "/":
                resultado = n1 / n2
                break;
        }
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.innerText = "Cálculo Inválido" 
    }
}