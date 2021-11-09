const Persona = {
    nombre:'Manuel',
    edad:37,
    casado:false,
    //Se pueden poner objetos dentro de otros objetos
    hijo:{
        nombrehijo:'Alma'
    }
}

console.log(Persona)
console.log(Persona.nombre)
console.log(Persona.casado)

//Se pueden añadir nuevas propiedades al objeto
Persona.id = 1

console.log(Persona.id)
console.log(Persona.hijo.nombrehijo)