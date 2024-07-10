let myLibrary = [];

function Book(title,author,pages,haveRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info =function ()
    {
        console.log(`The title is ${this.title} is written by ${this.author} \n It has ${this.pages} pages.
            \n Have u read the book ? ${this.haveRead}`);
    }
    
}

function addBookToLibrary()
{
    console.log("Enter the book name");    
}


