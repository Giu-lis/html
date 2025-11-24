// let inputElement = document.querySelector("input")
// let listElement = document.querySelector("ul")
// let itemElement = listElement.querySelectorAll("li")

// inputElement.addEventListener("input", (e) => {
//     let inputed = e.target.value.toLowerCase()
//     itemElement.forEach((li) => {
//         let text = li.textContent.toLowerCase()
//         if(text.includes(inputed)){
//             li.style.display = "block"
//         } else {
//             li.style.display = "none"
//         }
//     })
// })



const data = [
    { title: 'A noite das bruxas' },
    { title: 'O mundo de Sofia' },
    { title: 'A Hipótese do amor' },
    { title: 'Física 1: Mecânica' },
    { title: 'Colapso' }
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
            <div class="card">
                <h3>${e.title}</h3>
            </div>
        `
    })
}

searchInput.addEventListener("keyup", (e => {
    const search = data.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);
    if (searchInput.value.length < 1){
        displayData(null,null);
    }
    inputElement.addEventListener("input", (e) => {
    let inputed = e.target.value.toLowerCase()
    itemElement.forEach((card) => {
        let text = li.textContent.toLowerCase()
        if(text.includes(inputed)){
            li.style.display = "block"
        } else {
            li.style.display = "none"
        }
    })
 })
}))

