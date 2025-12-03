const data = [
    { title: 'A noite das bruxas' },
    { title: 'A Metamorfose' },
    { title: 'A Hipótese do amor' },
    { title: 'Crime e Castigo' },
    { title: 'O Pequeno Príncipe' }
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



const carousel = document.getElementById("carrosel");
const prevBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const cards = [...carousel.children];
const cardWidth = cards[0].offsetWidth + 14; 
let index = cards.length;

cards.forEach(card => {
  carousel.appendChild(card.cloneNode(true)); 
});
cards.forEach(card => {
  carousel.insertBefore(card.cloneNode(true), carousel.firstChild); 
});

carousel.style.transform = `translateX(${-index * cardWidth}px)`;

nextBtn.addEventListener("click", () => moveCarousel(1));
prevBtn.addEventListener("click", () => moveCarousel(-1));

function moveCarousel(direction) {
  index += direction;
  carousel.style.transition = "transform 0.35s ease";
  carousel.style.transform = `translateX(${-index * cardWidth}px)`;

  carousel.addEventListener("transitionend", handleLoopFix, { once: true });
}

function handleLoopFix() {
  if (index >= cards.length * 2) {
    index = cards.length;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(${-index * cardWidth}px)`;
  }
  if (index < cards.length) {
    index = cards.length * 2 - 1;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(${-index * cardWidth}px)`;
  }
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