let nombre = "kevincp"; //si se puede cambiar 
//declarar es cuando le decimos a js que vamos a crear una vairble con el nombre tal. }
//mientras que inicializar el dar el valor a la varibale.
const apellido = "caballero"; //no se puede cambiar el valor

// el operador que nos permite sumar o concatenar es +.
let nombreCompleto = nombre + ' ' + apellido;

// las funciones nos permiten encasular bloques de codigos para reutilizarlos 
//Nos sirbe cuanto tenemos variables o bloques de codigo muy 
//parecidos y que podamos reutilizar en el futuro

// las funciones reciben parametros cuando las estamos creando
//y argumentos cuando las estamos ejecutando

//la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion

while(respuesta != 4){
    let pregunta = prompt('¿ cuanto es 2 + 2?');
    respuesta = pregunta;
}

//array es una lista de elementos
//objeto es una lista de elementos pero cada elemento tiene un nombre clave
//arrays cuando lo que haremos en un elemnto es lo mismo que en todos los demas
//(la regla se puede inclumpir).mientras que un objeto cuando los nombre 
//de cada elemento son importantes.

function imprimirElemntoPorElemento(obj){
    const arr = Object.values(obj);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

const tipoDeSuscripciones = {
    free: 'solo puedes tomar los cursos gratis',
    basic:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert:'Puedes tomar casi todos los cursos de Platzi durante un año',    
    expertDuo:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};
function conseguirTipoSuscripcion(suscripcion){
    if(tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('ese tipo de suscripcion no exite');
}