function ShoppingList() {
  this.items = {} // Aquí guardaremos producto: cantidad
}

const count = parseInt(process.argv[3]) // cuántos productos ingresará el usuario
const myList = new ShoppingList()

// Cada producto va en pares: nombre y cantidad
// Ej: node index.js 6 3 Pan 2 Leche 1 Arroz 5
for (let i = 0; i < count; i++) {
  const product = process.argv[4 + (i * 2)]
  const quantity = parseInt(process.argv[5 + (i * 2)])

  // Manejar repetidos
  if (myList.items[product]) {
    myList.items[product] += quantity
  } else {
    myList.items[product] = quantity
  }
}

console.log("🛒 Resumen de tu lista de compras:")
console.log(myList.items)



