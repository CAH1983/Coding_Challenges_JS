// functional JS version

// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return 'out of stock';
//   } else if (this.numCopies < 10) {
//     return 'low stock';
//   } else {
//     return 'in stock';
//   }
// };

// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// };

// Book.prototype.restock = function (numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// };

// const HungerGames = new Book('Hunger games', 'Suzanne Collins', 123456, 45);

// HungerGames.sell(3);
// console.log(HungerGames.numCopies);

// Object oriented version

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numcopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return 'out of stock';
    } else if (this.numCopies < 10) {
      return 'low stock';
    } else {
      return 'in stock';
    }
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
    return this.numCopies;
  }

  restock(numCopiesRestocked = 5) {
    this.numCopies += numCopiesRestocked;
    return this.numCopies;
  }
}

const HarryPotter = new Book('Harry Potter', 'J.K. Rowling', 12345, 5);

console.log(HarryPotter.getAvailability());
console.log(' restocking ...');

HarryPotter.restock(1);
console.log('After restocking :', HarryPotter.getAvailability());

HarryPotter.sell(18);
console.log('after selling, we have :', HarryPotter.getAvailability());
