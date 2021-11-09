/////////////////////////////////////////////////////// PARTE 1 /////////////////////////////////////////////////////

// //Forma declarativa de una función en JS.
// //El argumento puede recibir cualquier variable.
// function NombreFuncion(){}

// //Llamar a una función.
// function saludar(){
//     console.log('Saludo')
// }
// saludar()

// //Arrow functions, o funciones de flecha.
// const saludo = () => {
//     console.log('Saludar desde Arrow Functions')
// }
// saludo()

// //También puede usar arrow functions en una sola línea
// const saludo2 = () => console.log('Saludar desde Arrow Functions en una sola línea') 
// saludo2()

/////////////////////////////////////////////////////// PARTE 2 /////////////////////////////////////////////////////

// //Ejemplo 1 de argumentos sin definición
// const saludar = (a, b, c) =>{
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// saludar(3, 'Manuel', true)

// //Ejemplo 2 de argumentos sin definición
// const saludar2 = (a, b, c) =>{
//     return a + b + c
// }
// console.log(saludar2(3, 'Manuel', true))

// //Ejemplo 3 de argumentos sin definición
// const saludar3 = (a, b, c) =>{
//     return a + b + c
// }
// console.log(saludar3(3, 4, 2))

/////////////////////////////////////////////////////// PARTE 3 /////////////////////////////////////////////////////

//Curry functions, o funciones dentro de otras funciones.
const func1 = (dato) => {
    return dato
}

const func2 = (d) => {
    console.log(d)
}

func2(func1('Manuel'))