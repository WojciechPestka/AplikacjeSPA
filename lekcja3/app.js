const car = {
    marka: "audi",
    cena: 10000,
    moc: 243,
    zwiekszMoc: function(dodawkowamoc) {
        this.moc += dodawkowamoc
    }
}

console.log(car)

car.zwiekszMoc(155)

console.log(car)

function Samochod(marka, cena, moc) {
    this.marka = marka;
    this.cena = cena;
    this.moc = moc;
}

Samochod.prototype.zwiekszMoc = function(wiekszamoc) {
    this.moc += wiekszamoc
}

const auta = [
    bmw = new Samochod("bmw", 1235, 500),
    fiat = new Samochod("fiat", 17858, 299),
    ford = new Samochod("ford", 8666, 60)
]

console.log(auta)

ford.zwiekszMoc(100)

console.log(auta)

for(const i of auta){
    console.log(JSON.stringify(i))
}

// 10
console.log(auta[0].toString())

// 11
Samochod.prototype.toString = function() {
    return(JSON.stringify(this))
}

console.log(auta[1].toString())


// Ćwiczenie 2
console.log("ćwiczenie 2")
json = JSON.stringify(auta[0])
console.log(json)
console.log(JSON.parse(json))
console.log(auta[0])