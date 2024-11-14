const cart = [];

// Add flavor to the cart
function addToCart(flavor) {
  cart.push(flavor);
  displayCart();
}

// Display cart items
function displayCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = ""; // Clear previous items
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    cartItems.appendChild(li);
  });
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert(`Thank you for your order! You have ordered: ${cart.join(", ")}`);
    cart.length = 0; // Clear cart after checkout
    displayCart();
  }
}
