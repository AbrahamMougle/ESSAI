let button = document.getElementById("button")
let image = document.getElementById("image")
let pokeNumber= document.getElementById("number")
let pokeName = document.getElementById("name")
const changePokemon=async ()=>{
    let randoomNumber = Math.ceil(Math.random() * 151)+1;
    let requestString=`https://pokeapi.co/api/v2/pokemon/${randoomNumber}`
  let data = await fetch(requestString);
    let response = await data.json()
    console.log(response)
    image.src =response.sprites.front_default
    pokeName.textContent=response.name;
    pokeNumber.textContent=response.id
}
changePokemon();
button.addEventListener("click",changePokemon)