document.getElementById('boton').addEventListener('click', (e) => {
    e.preventDefault;
    mostrarimg();
});
function mostrarimg(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(rest => {
        document.getElementById('img').src = rest[0].url;
    })
}
numeros();

function numeros(){
    for (let index = 0; index < 10; index++) {
        if (index % 2 == 0) {
            console.log(index);
            if (index == 2) {
                break;
            }    
        }
    }  
}