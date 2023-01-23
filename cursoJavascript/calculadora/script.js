let boton = document.getElementsByTagName('button');
boton[0].onclick = sumar;

function sumar(){
    const forma = document.getElementById('form');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'la operación no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}.`;

}