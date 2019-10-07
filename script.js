const firstBox = document.querySelector('#firstBox');
const secondBox = document.querySelector('#secondBox');
const thirdBox = document.querySelector('#thirdBox');

const firstList = document.querySelector('#firstList');
const secondList = document.querySelector('#secondList');
const thirdList = document.querySelector('#thirdList');


const slots = ['first','second','third'];

const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy', slot: 'third', selected: true },
]

const render = ()=> {
    // First Box's
    const firstUsers = users.map((person) => {
        if (person.slot === "first") {
            return `<button> ${person.name}</button>`
        }
    }).join('');
    firstList.innerHTML = firstUsers;

    // Second Box's
    const secondUsers = users.map((person) => {
        if (person.slot === "second") {
            return `<button> ${person.name}</button>`
        }
    }).join('');
    secondList.innerHTML = secondUsers;

    // Third Box
    const thirdUsers = users.map((person) => {
        if (person.slot === "third") {
            return `<button> ${person.name}</button>`
        }
    }).join('');
    thirdList.innerHTML = thirdUsers;
}

render(users);
