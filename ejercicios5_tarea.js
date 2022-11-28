
let mayor=0

for(let i=1; i <11; i++){
let edad=prompt("ingrese la edad de la persona" + i )

    if(edad>=18){
        mayor=mayor+1;
    }
}

console.log("Cantidad de personas mayores: " + mayor)

