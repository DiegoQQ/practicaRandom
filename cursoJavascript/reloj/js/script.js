const mostrarReloj = () => {
    let fecha = new Date();
    let hr = hora(fecha.getHours());
    let min = hora(fecha.getMinutes());
    let seg = hora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo' , 'Junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} de ${mes}`;

    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
}
const hora = (hora) => {
    if( hora < 10 )
        hora = '0' + hora;
    return hora;
}
window.addEventListener('load', ()=>{
    setInterval(mostrarReloj,1000);
});