const dialogBox = document.getElementById("bookAdd");
const addBook = document.getElementById("addBooks");
const saveBook = document.getElementById("saveMe");
const title = document.getElementById("title");
const author = document.getElementById("author")
const pages = document.getElementById("page");
const answer = document.getElementsByName("answer");
const radioRead = document.getElementById("yes");
const radioNoRead = document.getElementById("no");
// const isPressed = radio.checked ? "pressed" : "unpressed";
let myLibrary = [];
dialogBox.hidden = true;
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

addBook.addEventListener("click", ()=>{
    dialogBox.hidden = false
    title.value = "";
    author.value = "";
    answer.checked = false;
    pages.value = "";
    document.getElementById("help").hidden = false
    
    
});

saveBook.addEventListener("click" ,()=>{
    if(radioNoRead.checked==false && radioRead.checked== false)
    {
        alert("Select the status of book please");
        return false;
    }
    dialogBox.hidden = true;
    addBook.hidden = false;

    for(let i=0; i<answer.length; i++)
    {
        if(answer[i].checked)
        {
            answer.value = answer[i].value;
            
        }
    }
    let newBook = new Book(title.value,author.value,pages.value,answer.value)
     myLibrary.push(newBook);
     console.log(myLibrary);
     createBookGrid(newBook);
})
const container = document.getElementById("container");

function createBookGrid(data)
{
    const bookInfo = document.createElement("div");
    bookInfo.classList.add("grid-box");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    bookTitle.innerHTML = `Title : ${data.title}`;
    bookAuthor.innerHTML = `Author : ${data.author}`;
    bookPages.innerHTML = `Pages : ${data.pages}`;
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);
    const readBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    readBtn.textContent = `${data.haveRead}`;
    if(data.haveRead=="Have Read")
    {
        readBtn.style.background = "greenyellow";   
    }
    else{
        readBtn.style.backgroundColor = "red";
    }
    readBtn.setAttribute("id","readStatus");
    readBtn.addEventListener("click",()=>{
        if(data.haveRead === "Have Read" )
        {
            data.haveRead = "Haven't Read";
            readBtn.textContent = data.haveRead;
            readBtn.style.backgroundColor = "red";
        }
        else{
            data.haveRead = "Have Read";
            readBtn.textContent = "Have Read";
            readBtn.style.background = "greenyellow"

        }
    
    });

    deleteBtn.classList.add("btn");
    deleteBtn.addEventListener("click",()=>{
        container.removeChild(bookInfo);
        myLibrary.pop();
        prompt(myLibrary.length)
    });
    readBtn.classList.add("btn");
    bookInfo.appendChild(readBtn);
    bookInfo.appendChild(deleteBtn);
    container.appendChild(bookInfo);

}


