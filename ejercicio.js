const textop1 = document.getElementById("op1")
const calculo = document.getElementById("operador")
const textop2 = document.getElementById("op2")
const boton = document.getElementById("boton")
const resultado = document.getElementById("resultado")

boton.addEventListener("click",calcular)

function calcular() {
    const operador = calculo.value
    const op1 = parseFloat (textop1.value)
    const op2 = parseFloat (textop2.value)

    if(operador == "+" || operador == "-" || operador == "*" || operador == "/" || operador == "%" && !zisNaN(op1) && !isNaN(op2)){
       let resul
        switch(operador){
        case "+":
            resul = op1 + op2
        break;
        case "-":
            resul = op1 - op2
        break;
        case "*":
            resul = op1 * op2 
        break;
        case "/":
            resul = op1 / op2
        break;
        case "%":
            resul = op1 % op2
        break;
                   
           
       }
        resultado.innerText ="= " +resul    
    }else{
       resultado.innerText = "calculo inposible"
    }
}