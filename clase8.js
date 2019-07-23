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

function imprimirNombreYLaEdad(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    var { edad } = persona
    console.log(`Hola soy ${nombre} y tengo ${edad} años`)
}

imprimirNombreYLaEdad(Tatiana)
imprimirNombreYLaEdad(Sebastian)

function cumpleaños(persona) {
    persona.edad += 1
}