import { reactive } from 'vue'

export const orders = reactive({ list: [] })

export function addOrder(orderData) {
  const newOrder = {
    id: orders.list.length + 1,
    items: orderData.items,
    shippingAddress: orderData.shippingAddress
  }
  orders.list.push(newOrder)
}
