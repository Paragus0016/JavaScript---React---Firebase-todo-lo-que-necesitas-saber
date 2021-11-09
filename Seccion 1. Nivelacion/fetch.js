//Fetch debe trabajar dentro del navegador o de otro programa que tenga el motor de javascript.
fetch('https://jsonplaceholder.typicode.com/todos/1')
//Los then son promesas después que se abre el link.
    .then( response => response.json() )
    .then( json => console.log(json) )
    .then( json => console.log(json.userId) )
//Si cualquier promesa falla, el catch lo atrapa.
    .catch( e => console.log(e) )