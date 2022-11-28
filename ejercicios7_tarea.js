
let estudiante=0

for(let i=1; i <11; i++){
let nota =prompt("ingrese la nota del estudiante" + i )

    if(nota>=6){
        estudiante=estudiante+1;
        
    }
}

console.log("Cantidad de estudiantes aprobados: " + estudiante + " y " + (estudiante-10) + " reprobados")

