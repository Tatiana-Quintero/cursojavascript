var nombre = 'Tati'
var apellido = 'Quintero'

var nombreEnMayuscula = nombre.toUpperCase()
var apellidoEnMinuscula = apellido.toLocaleLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(3)

console.log(`${nombre} ${apellido}` + ' ' +'la ultima letra de su nombre es' + ' ' + str)
