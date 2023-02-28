//The `findAccountById()` function in `public/src/accounts.js` has two parameters, in the following order:
//- An array of account objects.
//- A string ID of a single account object.
function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  //Return the account object that has the matching ID.
  return found;
}

//The `sortAccountsByLastName()` function in `public/src/accounts.js` has a single parameter:
//- An array of account objects.
function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
  //Return a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
  return sorted;
}

//The `getTotalNumberOfBorrows()` function in `public/src/accounts.js` has two parameters, in the following order:
//- An account object.
//- An array of all book objects.
function getTotalNumberOfBorrows(account, books) {
  let accountId = account.id;
  return books.reduce((totalBorrowed, { borrows }) => {
    if (borrows.some((record) => record.id === accountId)) totalBorrowed++;
    //Return a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
    return totalBorrowed;
  }, 0);
}

//The `getBooksPossessedByAccount` function in `public/src/accounts.js` has three parameters, in the following order:
//- An account object.
function getBooksPossessedByAccount(account, books, authors) {
  //Filter through every book in books
  //- An array of all book objects.
  return (
    books
      .filter(
        (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
      )
      //- An array of all author objects.
      .map((book) => {
        book["author"] = authors.find((author) => author.id === book.authorId);
        //Return an array of book objects, including author information, that represents all books _currently checked out_ by the given account.
        return book;
      })
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
