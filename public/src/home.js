//The `getTotalBooksCount()` function in `public/src/home.js` has a single parameter:
//- An array of book objects
function getTotalBooksCount(books) {
  //Returns a _number_ that represents the number of book objects inside of the array
  return books.length;
}


//The `getTotalAccountsCount()` function in `public/src/home.js` has a single parameter:
//- An array of accounts
//Returns a _number_ that represents the number of account objects inside of the array
function getTotalAccountsCount(accounts) {
  //Returns a _number_ that represents the number of account objects inside of the array
  return accounts.length;
}


//The `getBooksBorrowedCount()` function in `public/src/home.js` has a single parameter:
//- An array of books
//This number can be found by looking at the first transaction object in the `borrows` array of each book. 
function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter(
    //If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.
    (book) => book.borrows.filter((record) => record.returned === false).length > 0
  );
  //Returns a _number_ that represents the number of books _that are currently checked out of the library
  return booksCheckedOut.length;
}


//The `getMostCommonGenres()` function in `public/src/home.js` has a single parameter:
function getMostCommonGenres(books) {
  let map = {};
  //- An array of book objects
  books.forEach((num) => {
   if (map[num.genre]) {
    map[num.genre]++;
   } else {
    map[num.genre] = 1;
   }
  });
  //Returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least
  return Object.entries(map)
  //Each object in the returned array has two keys:
  //- The `name` key which represents the name of the genre.
  //- The `count` key which represents the number of times the genre occurs.
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((a, b) => b.count - a.count)
   //Even if there is a tie, the array should only contain no more than five objects.
   .slice(0, 5);
 }


//The `getMostPopularBooks()` function in `public/src/home.js` has a single parameter:
function getMostPopularBooks(books) {
  //Returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed
  return books
   .map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
  //Each object in the returned array has two keys:
  //- The `name` key which represents the title of the book.
  //- The `count` key which represents the number of times the book has been borrowed.
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   //Even if there is a tie, the array should only contain no more than five objects.
   .slice(0, 5);
 }


//The `getMostPopularAuthors()` function in `public/src/home.js` has two parameters, in the following order:
function getMostPopularAuthors(books, authors) {
  let result = [];
  //- An array of book objects.
  //- An array of author objects.
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  //It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. 
  //Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
  //Each object in the returned array has two keys:
  //- The `name` key which represents the first and last name of the author.
  //- The `count` key which represents the number of times the author's books have been borrowed.
  //Even if there is a tie, the array should contain no more than five objects.
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }

//A helper function is a function that executes part of the logic of another function. 
//Helper functions make your programs easier to understand by letting you give descriptive names to computations and reuse them. 
//For this exercise, create at least one helper method for any of the functions that you implemented for this assignment.


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};





































