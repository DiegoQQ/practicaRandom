let [link, contenedor, antes, despues, num] = [`https://rickandmortyapi.com/api/character/?page=0`, document.getElementById('contenedor'), document.getElementById('pre'), document.getElementById('next'), document.getElementById('num')];
window.addEventListener('load',async ()=>{
    targetas(await infoRickMorty());
});

async function infoRickMorty(){
    try {
        const respuesta = await fetch(`${link}`);
        if (respuesta.status == 200) {
            const data = await respuesta.json();
            return data;
        } else {
            console.log('Error, no se encontro la dirección');
        }
        
    } catch (error) {
        console.log('error: ', error);
    }
}

async function targetas(data){
    let html = ``;
    for(let dta of Object.entries(data.results)){
        html += `<div class="col-3 ">
        <div class="card text-white bg-dark">
          <img src="${dta[1].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${dta[1].name}</h5>
          </div>
        </div>
      </div>`;
    }
    contenedor.innerHTML = html;
}

despues.addEventListener('click', async ()=>{
    let x = link;
    let y = num;
    link = await infoRickMorty();
    link = await link.info.next;
    if (link == null) {
        link = x;
    }
    targetas(await infoRickMorty());
});

antes.addEventListener('click', async ()=>{
    let x = link;
    let y = num;
    link = await infoRickMorty();
    link = await link.info.prev;
    if (link == null) {
        link = x;
    }
    targetas(await infoRickMorty());
});