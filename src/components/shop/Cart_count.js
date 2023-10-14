import { ref } from 'vue'

export const cart = ref([])
export const couponCode = ref('')

export function addToCart(item) {
  const foundItem = cart.value.find((product) => product.name === item.name)
  if (foundItem) {
    foundItem.quantity += 1
  } else {
    cart.value.push({ ...item, quantity: 1 })
  }
}

export function totalItemsInCart() {
  return cart.value.reduce((acc, item) => acc + item.quantity, 0)
}

export function applyCoupon() {
  const totalPrice = cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  if (totalPrice > 1000) {
    const discountedPrice = totalPrice * 0.9
    return discountedPrice.toFixed(2)
  }
  return totalPrice
}


