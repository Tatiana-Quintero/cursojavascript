//var nombreT = 'Tatiana'
//var nombreS = 'Sebastian'

var Tatiana = {
    nombre: 'Tatiana',
    apellido: 'Quintero',
    edad: 24 
}

var Sebastian = {
    nombre: 'Sebastian',
    apellido: 'De La Roche',
    edad: 25
}

function imprimirNombreEnMayusculas ({ apellido }) {
    console.log(apellido.toUpperCase())
}

imprimirNombreEnMayusculas(Tatiana)
imprimirNombreEnMayusculas(Sebastian)