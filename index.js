var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);
  let newCart = {itemName:item, itemPrice:price}
  cart.push(newCart);
  return(`${item} has been added to your cart.`);
  }

function viewCart() {

  if (cart.length === 0) {
    return("Your shopping cart is empty.")
  }

  let totalCartItems = "";
  let beginning = "In your cart, you have ";
  totalCartItems.push(beginning)

  if (cart.length === 1) {
        totalCartItems.push(`${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
        return totalCartItems;
  }

  if (cart.length === 2) {
            totalCartItems.push(`${Object.keys(cart[0])} at $${Object.values(cart[0])}, and ${Object.keys(cart[1])} at $${Object.values(cart[1])}`)
            return totalCartItems;
  }
if (cart.length > 2) {
  for (let i=0; i<cart.length-1; i++) {
    totalCartItems.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
    totalCartItems.join(" ,")
    totalCartItems.push(`${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`)
    return totalCartItems;
}
}

function total() {
  let totalCost = 0;
  for(let i=0; i < cart.length; i++) {
    totalCost += cart[i][price]
  }
return totalCost;
}


function removeFromCart(item) {
  for(let i=0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
  } else {
    return "That item is not in your cart."
  }
}
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber === 0) {
return(`Sorry, we don't have a credit card on file for you.`)
} else {
  cart = [];
  return(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
}
