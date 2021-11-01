  // The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookListArg, bookName) {
  let bookListVar = [];

  for(let i = 0; i < bookListArg.length; i++) {
    bookListVar.push(bookListArg[i]);
  }

  bookListVar.push(bookName);
  return bookListVar;
  
  // Change code above this line
}

// Change code below this line
function remove (bookListArg, bookName) {
  let bookListVar = [];

  for(let i = 0; i < bookListArg.length; i++){
    bookListVar.push(bookListArg[i]);
  }

  const book_index = bookListVar.indexOf(bookName);
  if (book_index >= 0) {

    bookListVar.splice(book_index, 1);
    return bookListVar;

    // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);