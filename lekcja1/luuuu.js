const content = document.getElementById('content')

function addToContent(s) {
    let p = document.createElement("p");
    p.innerText = s
    content.appendChild(p)
}

var car = {
    marka: "Honda",
    cena: 100000.00,
    moc: 125,
    zwiekszMoc: function (wart) {
        this.moc += wart;
    }
}

addToContent("ćwiczenie 1:")
addToContent(JSON.stringify(car))

car.zwiekszMoc(50)
addToContent("zwiekszona moc: " + JSON.stringify(car))

function Car(marka, cena, moc) {
    this.marka = marka
    this.cena = cena
    this.moc = moc
}

Car.prototype.zwiekszMoc = function(wart) {
    this.moc += wart
}

const cars = [
    new Car("Toyota", 150, 500),
    new Car("Ford", 399, 15),
    new Car("Honda", 10000, 125),
]

addToContent("ćw. 1.7:")
for(const i of cars){
    addToContent(JSON.stringify(i))
}

cars[1].zwiekszMoc(1000)
addToContent("Zwiekszona moc:")
for(const i of cars){
    addToContent(JSON.stringify(i))
}

addToContent("toString (domyślna implementacja z klasy Object):")
addToContent(cars[0].toString())

Car.prototype.toString = function() {
    return(JSON.stringify(this))
}

addToContent("toString (własna implementacja):")
addToContent(cars[1].toString())

addToContent("\n\n\n\nĆwiczenie 2:")
stringified = JSON.stringify(cars[0])
console.log(stringified)
console.log(JSON.parse(stringified))
console.log(cars[0])
