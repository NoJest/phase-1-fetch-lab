let pageCount = 0

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((data) => {
    renderBooks(data)
    return data;
  })
  // .then((json) => console.log(json));
}

async function main(){
  const books = await getData()
  // console.log(data)
  const bookFive= books[4]
  console.log(bookFive.name)
  const character = await getCharacter()
  console.log(character.name)
  
  books.forEach( book => { 
    pageCount= pageCount + book.numberOfPages 
    
  });
  console.log(pageCount)
  // return bookFive.name, character.name, pageCount
}

  // for (let i = 0; i < data.length; i++) {
  // pageCount = data[i].numberOfPages + pageCount
  // }

async  function getCharacter(){
const response = await fetch('https://anapioficeandfire.com/api/characters/1031')
return await response.json()
}
// function getCharacter(){
  // fetch('https://anapioficeandfire.com/api/characters/1031')
  // .then((response) => response.json())
  // .then((characterData) => return characterData)
// }

async function getData() {
  const response = await fetch('https://anapioficeandfire.com/api/books');
  return await response.json();
}
// function getData(){
  // fetch('https://anapioficeandfire.com/api/books')
  // .then((response) => response.json())
  // .then((bookData) => return bookData)
// }

main()


 function renderBooks(books) {

  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });
