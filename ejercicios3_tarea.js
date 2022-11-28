let zona
let minutos

zona = 25
minutos=5

if (zona==12) {
    console.log("usted hablo " + minutos + " minutos  de la zona " + zona + "  y su saldo es de " + minutos*2+" dolares" )
}else if (zona==15) {
    console.log("usted hablo " + minutos + " minutos  de la zona " + zona + "  y su saldo es de " + minutos*2.20+" dolares" )
}
else if (zona==18) {
    console.log("usted hablo " + minutos + " minutos  de la zona " + zona + "  y su saldo es de " + minutos*4.50+" dolares" )
}
else if (zona==19) {
    console.log("usted hablo " + minutos + " minutos  de la zona " + zona + "  y su saldo es de " + minutos*3.50+" dolares" )
}
else if (zona == 23 || zona == 25) {
    console.log("usted hablo " + minutos + " minutos  de la zona " + zona + "  y su saldo es de " + minutos*6+" dolares" )
}
else if (zona==29) {
    console.log("usted hablo " + minutos + " minutos  de la zona " + zona + "  y su saldo es de " + minutos*5+" dolares" )
} 