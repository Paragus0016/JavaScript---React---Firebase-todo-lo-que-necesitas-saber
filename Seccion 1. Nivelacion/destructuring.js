const Persona = {
    nombre:'Manuel',
    edad:37,
    casado:false,
    hijo:{
        nombrehijo:'Alma'
    }
}

//Object destructuring
const {nombre, edad} = Persona
console.log(nombre)
console.log(edad)

const {nombrehijo} = Persona.hijo
console.log(nombrehijo)