let cart = [];

function addItem(item){
    cart.push(item);
}

function removeItem(item){
    cart = cart.filter(i => i !== item);
}