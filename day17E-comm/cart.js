const showCart = document.getElementById("showCart");
const total = document.getElementById("total");


let carts = JSON.parse(localStorage.getItem("carts")) || [];


carts = carts.map(product => ({
    ...product,
    qty: product.qty ? product.qty : 1
}));

localStorage.setItem("carts", JSON.stringify(carts));



const displayCart = () => {

    showCart.innerHTML = "";
    let totalPrice = 0;

    carts.forEach((product, i) => {

        totalPrice += product.price * product.qty;

        let div = document.createElement("div");

        div.innerHTML = `
        <div class="card m-3 " style="width: 18rem; height: 450px">
            <img src="${product.images[0]}" class="card-img-top">
            <div class="card-body">
                <h5>${product.title}</h5>
                <p>₹${product.price}</p>

                <div class="d-flex justify-content-between align-items-center">

                    <div>
                        <p class="fs-4 m-0">${product.qty}</p>
                    </div>

                    <div>
                        <button class="btn btn-primary" onclick="qtyIncrease(${i})">+</button>
                        <button class="btn btn-secondary" onclick="qtyDecrease(${i})">-</button>
                    </div>

                    <div>
                        <button class="btn btn-danger" onclick="removeCart(${i})">
                            Remove
                        </button>
                    </div>

                </div>

            </div>
        </div>
        `;

        showCart.appendChild(div);
    });


    total.textContent = `Total : ₹ ${totalPrice.toFixed(2)} /-`;
};



const qtyIncrease = (i) => {
    carts[i].qty += 1;
    localStorage.setItem("carts", JSON.stringify(carts));
    displayCart();
};


const qtyDecrease = (i) => {
    if (carts[i].qty > 1) {
        carts[i].qty -= 1;
        localStorage.setItem("carts", JSON.stringify(carts));
        displayCart();
    }
};


const removeCart = (i) => {
    carts.splice(i, 1);
    localStorage.setItem("carts", JSON.stringify(carts));
    displayCart();
};


displayCart();
