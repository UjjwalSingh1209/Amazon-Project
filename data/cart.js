export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }];
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  }); 
  
  return cartQuantity;
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity) {
    let matchingItem;
    cart.forEach(cartItem => {

        if (cartItem.productId === productId) {
            matchingItem = cartItem;
        }

    });

    if (matchingItem) matchingItem.quantity += quantity;
    else {
        cart.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionId: '1'
        });
    }
    saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
  for (const cartItem of cart) {
    if (cartItem.productId === productId) {

      if (newQuantity > 0 && newQuantity < 1000) {
        cartItem.quantity = newQuantity;
        saveToStorage();

        return {
          success: true
        };
      }

      if (newQuantity <= 0) {
        return {
          success: false,
          message: "Quantity must be at least 1."
        };
      }

      return {
        success: false,
        message: "Quantity must be less than 1000."
      };
    }
  }
  return {
  success: false,
  message: "Product not found."
};
}
