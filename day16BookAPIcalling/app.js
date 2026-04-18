const API_KEY = "AIzaSyC-5lTpNHAVeS4Jc4fvXBKCezccbQBMLBM";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const booksContainer = document.getElementById("booksContainer");
const cartBtn = document.getElementById("cart")
const showCart = document.getElementById("show-cart")
// const container = document.getElementById("container")




function fetchBooks(query = "ramayana") {

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            displayBooks(data.items || []);
            console.log(data.items)
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

function displayBooks(books) {
    booksContainer.innerHTML = "";

    if (books.length === 0) {
        booksContainer.innerHTML = "<h3 class='text-center'>No books found 😢</h3>";
        return;
    }

    books.forEach(book => {

        const info = book.volumeInfo;

        const div = document.createElement("div");
        div.style.width = "300px"
        div.style.height = "500px"


        div.innerHTML = `
                <div class="card h-80">

                 <div class="d-flex justify-content-center"> 
            <img style=" width: 180px; height: 200px" src="${info.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}" class="card-img-top">
        </div>

                    <div class="card-body text-dark">
                        <h5>${info.title || "No Title"}</h5>
                        <p>Author: ${info.authors?.[0] || "Unknown"}</p>
                        <p>Published: ${info.publishedDate || "N/A"}</p>

                        <div class="d-flex justify-content-between">
                            <a href="${info.previewLink}" target="_blank" class="btn btn-primary btn-sm">Preview</a>
                            <button class="btn btn-info btn-sm save-btn">add cart</button>
                        </div>
                    </div>
                </div>
                `;


        div.querySelector(".save-btn").addEventListener("click", () => {
            saveToLocalStorage({
                title: info.title,
                author: info.authors?.[0] || "Unknown",
                published: info.publishedDate,
                thumbnail: info.imageLinks?.thumbnail || ""
            });
        });

        booksContainer.appendChild(div);
    });
}


function saveToLocalStorage(book) {

    let savedBooks = JSON.parse(localStorage.getItem("books")) || [];

    const exists = savedBooks.some(b => b.title === book.title);

    if (exists) {
        alert("Book already saved 😅");
        return;
    }

    savedBooks.push(book);

    localStorage.setItem("books", JSON.stringify(savedBooks));

    alert("Book saved successfully ");
}


searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    fetchBooks(query || "ramayana");
});


searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});



fetchBooks();