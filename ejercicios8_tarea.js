let textop1 =parseFloat ( prompt("ingrese primer numero"));
let calculo = prompt("ingrese operador")
let textop2 =parseFloat( prompt("ingrese segundo numero"));


function calcular() {


    if(calculo == "+" || calculo == "-" || calculo == "*" || calculo == "/"  && !isNaN(textop1) && !isNaN(textop2)){
       let resul
        switch(calculo){
        case "+":
            resul = textop1+textop2
        break;
        case "-":
            resul = textop1 - textop2;
        break;
        case "*":
            resul = textop1 * textop2;
        break;
        case "/":
            resul = textop1 / textop2;
        break;
        }
        console.log("el resultado es = " + resul)  
    }else{
        console.log("no se pùede operar")
    }
}

calcular();