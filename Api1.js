/**
 * permet de recuperer sous forme de tableau les adresse des images
 * @param {string} key 
 * @param {string} imageCollection 
 * @returns Array
 */
async function request(key,imageCollection) {
  const response = await fetch(`https://pixabay.com/api/?key=${encodeURIComponent(key)}&q=${imageCollection}&image_type=photo`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Une erreur s\'est produite lors de la requête API.');
  }
  return data.hits.map(a => a.largeImageURL);
}
/**
 * Permet de generer de nombre aléatoire entier naturel compris entre 0 et arrayLength
 * @param {string} arrayLength 
 * @returns number
 */

function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

async function main() {
  try {
    const donne = await request('43315395-da4e6fb592e0b01425983e9ef','nature');
    const aleatoire = getRandomIndex(donne.length);
    const image = document.querySelector('#image');
    image.src = donne[aleatoire];
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
}

setInterval(main, 1000);