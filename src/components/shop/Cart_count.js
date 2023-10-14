import { ref } from 'vue'

export const cart = ref([])

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
