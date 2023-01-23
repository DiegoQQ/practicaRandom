/*let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion) 
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
});

miPromesa.then(valor => console.log(valor), error => console.log(error));//reciben la información que envian resolver
//y rechazar, y los imprime en consola, en este caso al ser true imprime en consola 'Resolvió correcto'

//otra forma de ejecución
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));


let promesa = new Promise((resolver) => {
    console.log('inicio');
    setTimeout( () => resolver('saludos con promesas y timeout'), 3000);//envia el texto a la variable valor, despues de 3 segundos
    console.log('fin');
});

promesa.then(valor => console.log(valor));//simplemente se ejecuta la promesa y envia la variable valor el resultado

//async indica una función regresa una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));//saludos con promesa y async 

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('promesa con await');
    });

    console.log( await miPromesa );
}

funcionConPromesaYAwait();//promesa con await
*/
//Promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    console.log('inicio');//se ejecuta al instante
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);//espera a que se ejecute primero la promesa
    console.log('fin');//al terminar la promesa se ejecuta esta linea
}

funcionConPromesaAwaitTimeout();//promesa con await y timeout