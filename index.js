const interesTres = 0.1
const interesSeis= 0.25
const interesDoce= 0.35
const interesVeintiCuatro = 0.5
let monto = ""
function entrada(entrada){
    monto = entrada
    if(entrada != ""){
        alert("Usted ingreso el monto de $" + monto)
    } else {
        alert("Ingrese un valor valido")
        prompt("Ingrese el valor total del producto")
    }
    return monto
}
entrada(prompt("Ingrese el monto a financiar"))

let cuotas = (prompt("Ingrese la cantidad de cuotas \n 1. 3 cuotas (10% interes) \n 2. 6 cuotas (25% de interes)\n 3. 12 cuotas (35% de interes) \n 4. 24 cuotas (50% de interes)"))        
    switch(cuotas){
        case "1":
            cuotas = 3
            alert("Usted eligio 3 cuotas")
            break
        case "2":
            cuotas = 6
            alert("Usted eligio 6 cuotas")
            break
        case "3":
            cuotas = 12 
            alert("Usted eligio 12 cuotas")
            break
        case "4":
            cuotas = 24
            alert("usted eligio 24 cuotas")
            break
        default:    
            alert("Defina una cantidad de cuotas valida")
    }

tresCuotas = (monto, interesTres) => monto  * interesTres
seisCuotas = (monto, interesSeis) => monto  * interesSeis
doceCuotas = (monto, interesDoce) => monto * interesDoce
veintiCuotas = (monto, interesVeintiCuatro) => monto * interesVeintiCuatro


function procesamiento(cuotas){
    let resultadoI = 0
    let resultadoFinal = 0
    if (cuotas == 3){
        resultadoI = parseFloat(monto)  + tresCuotas(monto, interesTres) 
        resultadoFinal = resultadoI / cuotas
        alert("El valor de cada cuota = $" +resultadoFinal + " por mes durante 3 meses" )
    } else if (cuotas == 6){
        resultadoI = parseFloat(monto ) + seisCuotas(monto, interesSeis)
        resultadoFinal = resultadoI / cuotas
        alert("El valor de cada cuota = $" + resultadoFinal + " por mes durante 6 meses")
    } else if (cuotas == 12){
        resultadoI = parseFloat(monto) + doceCuotas(monto, interesDoce) 
        resultadoFinal = resultadoI / cuotas
        alert("El valor de cada cuota = $ " + resultadoFinal + " por mes durante 12 meses")
    } else if (cuotas == 24){
        resultadoI = parseFloat(monto)  + veintiCuotas(monto, interesVeintiCuatro)
        resultadoFinal = resultadoI / cuotas
        alert("El valor de cada cuota = $ " + resultadoFinal + " por mes durante 24 meses")
    } else {
        alert("Valor invalid")
    }
}

procesamiento(cuotas)
