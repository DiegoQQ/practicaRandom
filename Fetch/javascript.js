const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');
button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPokemon(input.value);
});

function traerPokemon(input){
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}/`)
    .then((rest) => rest.json())
    .then((data) => {
        crearPokemon(data);
    })
    .catch( (err) => {
        error();
    })
}

function error() {
    const p = document.createElement('p');
    p.textContent = 'Error, no se ha podido encontrar el elemento';
    p.style.color = 'red';
    pokemonContainer.appendChild(p);
    setTimeout(() => {
        p.remove();
    }, 4000);
    
}

function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
}

