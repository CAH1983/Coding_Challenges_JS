class Movie {
  constructor(title, director, genre, year, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.year}.
      It received a rating of ${this.rating}`;
  }
}

let Exorcist = new Movie('Exorcist', 'William Friedkin', 'horror/supernatural', '1973', '5  stars');
let Cabin = new Movie('The cabin in the woods', 'Drew Goddard', 'horror/comedy', '2012', '3  stars');
let Conjuring = new Movie('Conjuring', 'James Wan', 'Horror, Mystery & Thriller', '2013', '4  stars');
let Carrie = new Movie('Carrie', 'Brian De Palma', 'horror', '1998', '5  stars');

console.log(Exorcist.getOverview());
console.log(Cabin.getOverview());
