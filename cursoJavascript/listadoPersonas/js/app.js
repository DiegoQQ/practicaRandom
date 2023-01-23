window.addEventListener('load', () => {
    const personas = [
        new Persona('juan', 'perez'),
        new Persona('karla', 'lara')
    ];
    mostrarPersonas();
    function mostrarPersonas(){
        let texto = '';
        for(let persona of personas){
            texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
        }
        document.getElementById('personas').innerHTML = texto;
    }

    (() => {
        let boton = document.getElementsByTagName('button');
        boton[0].addEventListener('click', () => {
            const forma = document.forms['forma'];
            const nombre = forma['nombre'];
            const apellido = forma['apellido'];
            if (nombre.value != '' && apellido.value != '') {
                const persona = new Persona(nombre.value, apellido.value);
                personas.push(persona);
                mostrarPersonas();              
            }else{
                forma.insertAdjacentHTML(
                    'afterbegin',
                    `<p id="error" style="color: red;">No se puede registrar la persona ya que falta datos por rellenar</p>`
                );
                setTimeout(() => {
                    document.getElementById('error').remove();
                }, 3000);
            }
        });
    })();
});