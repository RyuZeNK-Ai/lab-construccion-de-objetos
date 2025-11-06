function Car(marca, modelo, year, motor, color, km) {
  this.marca = marca
  this.modelo = modelo
  this.year = year
  this.motor = motor
  this.color = color
  this.km = km

  this.describe = function() {
    console.log(
      `🚗 Auto: ${this.marca} ${this.modelo} (${this.year})\n` +
      `🔧 Motor: ${this.motor}\n` +
      `🎨 Color: ${this.color}\n` +
      `📍 Kilometraje: ${this.km} km\n`
    )
  }
}

// Recibimos los datos desde la consola:
const marca = process.argv[3]
const modelo = process.argv[4]
const year = process.argv[5]
const motor = process.argv[6]
const color = process.argv[7]
const km = process.argv[8]

// Creamos el objeto coche
const myCar = new Car(marca, modelo, year, motor, color, km)

// Mostramos la descripción
myCar.describe()




