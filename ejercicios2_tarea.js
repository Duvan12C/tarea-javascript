let inpuesto;

inpuesto=40.01

if (inpuesto >= 0 && inpuesto <=20 ) {
    console.log("Usted NO genera inpusto")
}else if(inpuesto >= 20.01 && inpuesto <= 40 ){
    console.log("su inpuesto es del 30%")
}else if(inpuesto >=40.01 && inpuesto <= 500){
    console.log("su inpuesto es del 40%")
}else{
    console.log("su inpuesto es del 50%")
}