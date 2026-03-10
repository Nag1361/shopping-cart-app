let cart = [];

function addItem(item) {
    cart.push(item);
    console.log(item + " added to cart");
}

function removeItem(item) {
    cart = cart.filter(i => i !== item);
    console.log(item + " removed from cart");
}

module.exports = { addItem, removeItem };