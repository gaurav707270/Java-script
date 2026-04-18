const showCart = document.getElementById("show-cart");

const books = JSON.parse(localStorage.getItem("books")) || [];

books.forEach((book, index) => {
    const div = document.createElement("div");
    div.style.width = "300px";
    div.style.height = "500px";

    div.innerHTML = `
    <div class="card h-80">
        <div class="d-flex justify-content-center"> 
            <img style="width: 170px; height: 200px"
                 src="${book.thumbnail || 'https://via.placeholder.com/150'}"
                 class="card-img-top">
        </div>
        <div class="card-body text-dark">
            <h5>${book.title || "No Title"}</h5>
            <p>Author: ${book.author || "Unknown"}</p>
            <p>Published: ${book.published || "N/A"}</p>

            <div class="d-flex justify-content-between">
                <button class="btn btn-danger btn-sm save-btn">Delete</button>
            </div>
        </div>
    </div>`;

    
    showCart.appendChild(div);

    
    div.querySelector(".save-btn").addEventListener("click", () => {
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));

        location.reload(); 
    });
});