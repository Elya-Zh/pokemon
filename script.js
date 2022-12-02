
document.querySelector('#search').addEventListener('click',getPokemon)

function lowerCaseName(string) {
    return string.toLowerCase()
}

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase().slice(1)
}

function getPokemon(e){
    const pokeName = document.querySelector('#pokemonName').value
    const pokemonName = lowerCaseName(pokeName)
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
 fetch(url)
 .then(res=>res.json())
 .then((data)=>{
     document.querySelector('.pokemonBox').innerHTML = `
     <div>
             <img src=${data.sprites.other['official-artwork'].front_default} alt=${capitalizeFirst(data.name)}>
         </div>
         <div class="pokemonInfo">
         <h1>${capitalizeFirst(data.name)}</h1>
         <p>Weight: ${data.weight}</p>
         </div>
     </div>
     `
 })
 .catch(err=>console.log(err,'Pokemon not found'));

 e.preventDefault()
}
getPokemon()