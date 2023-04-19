class PrintEditionItem{
    constructor (name, releaseDate, pagesCount, state, type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state*=1.5;
    }
    set state(value){
        if(value < 0){
            this._state = 0;
        }
        if(value > 100){
            this._state = 100;
        }
        else{
            this._state = value;
        }
    }
    get state(){
        return this._state;
    }
}
class Magazine extends PrintEditionItem{
    constructor (name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem{
    constructor (author, name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book{
    constructor (name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
}
class FantasticBook extends Book{
    constructor (name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor (name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}

class Library{
    constructor(name, books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        return this.books.find(book => book[type] === value) || null;
    }
    giveBookByName(bookName){
        let reqBook = this.books.find(book => book.name === bookName)
        if(reqBook === undefined){
            return null;
        }
        return this.books.splice(reqBook,1)[0];
    }
}