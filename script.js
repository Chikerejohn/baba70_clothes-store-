let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);