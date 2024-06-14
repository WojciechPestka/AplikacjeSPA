// Zadanie 3

class Osoba {
    constructor(imie, wiek) {
        this._imie = imie
        this._wiek = wiek
    }
    set imie(imie) {this._imie = imie}
    get imie() {return this._imie}
    set wiek(wiek) {this._wiek = wiek}
    get wiek() {return this._wiek}
    przedstaw() {console.log(`Jestkm ${this._imie}, mam ${this._wiek} lat`)}
}

const Marek = new Osoba("Marek", 24)

Marek.przedstaw()

class Pracownik extends Osoba {
    constructor (imie, wiek, zawod) {
        super(imie, wiek)
        this.zawod = zawod
    }
    przedstaw() {
        super.przedstaw()
        console.log(`i pracuję jako ${this.zawod}`)
    }
}

const Areczek = new Pracownik("Areczek", 20, "młodszy mopujący")

Areczek.przedstaw()
// console.log(Areczek.przedstaw)

Areczek.imie = "Arkadziusz"
Areczek.wiek = "60"
Areczek.zawod = "starszy mopujący"

Areczek.przedstaw()
// console.log(Areczek.przedstaw)