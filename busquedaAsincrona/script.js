const input = document.getElementById('buscador');
const userslist = document.getElementById('users');

let users = [];

window.addEventListener('DOMContentLoaded', async ()=>{
    userslist.innerHTML = '<h1>Loading ...</h1>';

    const datos = await loadUsers();
    users = datos.data;
    renderUsers(users);
});

async function loadUsers(){
    const respuesta = await fetch(`https://fakerapi.it/api/v1/users?_quantity=1000`);
    return await respuesta.json();
}

input.addEventListener('keyup', e => {
    const newUsers = users.filter(user => `${user.firstname} ${user.lastname}`.toLowerCase().includes(input.value.toLowerCase()));
    renderUsers(newUsers);
});

const createUsersItems = users => users.map (user =>`<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join(' ');

function renderUsers(users){
    const itemsString = createUsersItems(users);
    userslist.innerHTML = itemsString;
}