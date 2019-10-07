const firstBox = document.querySelector('#firstBox');
const secondBox = document.querySelector('#secondBox');
const thirdBox = document.querySelector('#thirdBox');

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
            return `<li> ${person.name}</li>`
        }
    }).join('');
    firstBox.innerHTML = firstUsers;

    // Second Box's
    const secondUsers = users.map((person) => {
        if (person.slot === "first") {
            return `<li> ${person.name}</li>`
        }
    }).join('');
    secondBox.innerHTML = secondUsers;

    // Third Box
    const thirdUsers = users.map((person) => {
        if (person.slot === "first") {
            return `<li> ${person.name}</li>`
        }
    }).join('');
    thirdBox.innerHTML = thirdUsers;
}

console.log(users)
