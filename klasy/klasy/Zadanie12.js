// Zadanie 1

class Osoba {
    constructor (imie, wiek) {
        this.imie = imie
        this.wiek = wiek
    }
    przedstaw() {
        console.log(`Jestkm ${this.imie}, mam ${this.wiek} lat`)
    }
}

const Marek = new Osoba("Marek", 24)

Marek.przedstaw()

Marek.imie = "Mariusz"
Marek.wiek = "50"

Marek.przedstaw()

// Zadanie 2

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

Areczek.imie = "Arkadziusz"
Areczek.wiek = "60"
Areczek.zawod = "starszy mopujący"

Areczek.przedstaw()

