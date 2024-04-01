let nextButton = document.querySelector(".buttonNext")
let prevButton = document.querySelector(".buttonPrev")
let image = document.getElementById("image")
let pokeNumber= document.getElementById("number")
let pokeName = document.getElementById("name")
let prev=1;
const changePokemon=async ()=>{
    let requestString=`https://pokeapi.co/api/v2/pokemon/${prev}`
    prev++;
    let data = await fetch(requestString);
    let response = await data.json()
    image.src =response.sprites.front_default
    pokeName.textContent=response.name;
    pokeNumber.textContent=response.id
}
const changePrev=async ()=>{
  let requestString=`https://pokeapi.co/api/v2/pokemon/${prev}`
  prev--;
  
  let data = await fetch(requestString);
  let response = await data.json()
  image.src =response.sprites.front_default
  pokeName.textContent=response.name;
  pokeNumber.textContent=response.id
}

changePokemon();
nextButton.addEventListener("click",changePokemon)
prevButton.addEventListener('click',changePrev)