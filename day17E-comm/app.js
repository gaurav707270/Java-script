const showCart = document.getElementById("showCart");


const saveLocalStorage = (carts) => {
    localStorage.setItem("carts", JSON.stringify(carts));
}


let products = [];

const addToCart = (i) => {

    console.log(products[i])



    let carts = JSON.parse(localStorage.getItem("carts")) || [];


    const exists = carts.find((item) => item.id === products[i].id);

    if (!exists) {
        carts.push(products[i]);
        saveLocalStorage(carts);
        console.log("Added to cart", carts);
    } else {
        alert("Product already in cart");
    }
}


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        products = data.products;

        products.forEach((product, i) => {
            const div = document.createElement("div");

            div.innerHTML = `
            <div class="card m-3 " style="width: 18rem; height: 450px ">
                <img src="${product.images[0]}" class="card-img-top">
                <div class="card-body">
                    <h5>${product.title}</h5>
                    <p>₹${product.price * 93}</p>

                    <button class="btn btn-primary"
                        onclick='addToCart(${i})'>
                        Add to Cart
                    </button>

                </div>
            </div>
            `;

            showCart.appendChild(div);
        });
    });
