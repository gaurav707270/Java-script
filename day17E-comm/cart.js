const showCart = document.getElementById("showCart");
const total = document.getElementById("total");



let carts = JSON.parse(localStorage.getItem("carts")) || [];

let totalPrice = 0

// let totalPrice = () => {
//     let total = 0;
//     carts.forEach((product) => {
//         total += product.price * product.qty * 93
//     });
//     return total

// }

console.log(totalPrice)


const updatedCarts = carts.map(product => {
    return {
        ...product,
        qty: product.qty ? product.qty : 1
    };
});

localStorage.setItem("carts", JSON.stringify(updatedCarts));





const removeCart = (i) => {

    carts.splice(i, 1)

    localStorage.setItem("carts", JSON.stringify(carts))

    refreshPage()


}




const qtyIncrease = (i) => {

    carts[i].qty += 1
    // totalPrice += carts[i].price * 93
    // console.log(totalPrice)
    localStorage.setItem("carts", JSON.stringify(carts))
    refreshPage()

}

const qtyDecrease = (i) => {
    if (carts[i].qty > 1) {
        carts[i].qty -= 1
        // totalPrice -= carts[i].price * 93
        console.log(totalPrice)
        localStorage.setItem("carts", JSON.stringify(carts))
        refreshPage()

    }
}


function refreshPage() {
    location.reload();
}

const diplayCart = () => {
    carts.forEach((product, i) => {
        let div = document.createElement("div");
        totalPrice += product.price * 93 * product.qty


        total.textContent = ` Total : ₹ ${totalPrice.toFixed(2)} /-`

        div.innerHTML = `<div class="card m-3" style="width: 18rem; height: 450px">
                <img src="${product.images[0]}" class="card-img-top">
                <div class="card-body">
                    <h5>${product.title}</h5>
                    <p>₹${product.price * 93}</p>

                    <div class="d-flex justify-content-between">

                    <div>
                        <p class="fs-4" >${product.qty}</p>
                    </div>

                    <div >
                    <button class="btn btn-primary" onclick="qtyIncrease(${i})">
                        ++
                    </button>

                    <button class="btn btn-secondary" onclick="qtyDecrease(${i})">
                        --
                    </button>
                    </div>
                    
                    <div>
                    <button class="btn btn-danger w-100" onclick="removeCart(${i})">
                        Remove
                    </button>
                    </div>

                    
                    </div>

                </div>
            </div>`;
        showCart.appendChild(div);
    });
}

diplayCart()