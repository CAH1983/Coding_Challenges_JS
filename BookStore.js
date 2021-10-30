const addBtn = document.getElementById('add-book-btn');

addBtn.addEventListener('click', addBook);

class Book {
    constructor(title, author, isbn, numcopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numcopies = numcopies
    }
    getAvailability(numcopies) {
        if (numcopies === 0) {
            return 'Out of Stock';
        } else if (numcopies < 10) {
            return 'Low Stock';
        } else {
            return 'in stock'
        }
    }
    sell(numSold) {
        var newNumcopies = this.numcopies - numSold;
        this.numcopies = newNumcopies;
        return ` remaining in stock now: ${newNumcopies}`;
    }

}

let book1 = new Book('Harry Potter', 'J.K Rowling', '123456', 12);

function addBook() {
    // get the values from the inputs
    const titleVal = document.querySelector("#Title").value;
    const authorVal = document.querySelector("#Author").value;
    const ISBNVal = document.querySelector("#ISBN").value;
    const numCopiesVal = document.querySelector("#numCopies").value;
    const bookList = document.querySelector("#book-list");

    let li = document.createElement('li');

    // create an new book object


    // generate a markup HTML
    li.textContent = `${titleVal} - ${authorVal} - ${ISBNVal} - ${numCopiesVal}`

    //insert this markup in the <ul>
    bookList.appendChild(li)

}


