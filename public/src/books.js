//The `findAuthorById()` function in `public/src/books.js` has two parameters, in the following order:
function findAuthorById(authors, id) {
  //- An array of author objects.
  //- An integer ID of a single author object.
  let found = authors.find((author) => author.id === id);
  //Return the author object that has the matching ID
  return found;
}

//The `findBookById()` function in `public/src/books.js` has two parameters, in the following order:
//- An array of book objects.
//- A string ID of a single book object.
function findBookById(books, id) {
  let found = books.find((books) => books.id === id);
  //Return the book that has the matching ID
  return found;
}

//The `partitionBooksByBorrowedStatus()` function in `public/src/books.js` has a single parameter:
//- An array of book objects.

//_ You can check for the return status by looking at the first transaction object in the `borrows` array.

function partitionBooksByBorrowedStatus(books) {
  //The first array contains book objects that represent the books _that are currently checked out
  let available = [];
  //The second array contains book objects that represent the books_that have been returned.
  let unavailable = [];
  const bookStatuses = [];
  books.forEach((book) => {
    const isBookReturned = book.borrows[0].returned;

    if (isBookReturned) {
      // if book is not returned
      unavailable.push(book);
    } else {
      // if book is returned
      available.push(book);
    }
  });
  bookStatuses.push(available);
  bookStatuses.push(unavailable);
  //Return an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
  return bookStatuses;
}

//The `getBorrowersForBook()` function in `public/src/books.js` has two parameters, in the following order:
//- A book object.
//- An array of all account objects.
function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowArray = book.borrows;
  borrowArray.forEach((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    let object = account;
    object["returned"] = borrow.returned;
    result.push(object);
  });
  console.log(result);
  //Return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array.
  //However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
