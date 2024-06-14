// Zadanie 6


class Osoba {
    #imie
    #wiek

    constructor(imie, wiek) {
        this.#imie = Osoba.formatujImie(imie)
        this.wiek = wiek
    }
    set imie(imie) {this.#imie = Osoba.formatujImie(imie)}
    get imie() {return this.#imie}
    set wiek(wiek) {
        if (typeof wiek !== 'number') {
            throw new TypeError("Wiek nie jest liczbą")
        }
        if (wiek <= 0) {
            throw new RangeError("Wiek musi być większy od 0")
        }
        this.#wiek = wiek
    }
    get wiek() {return this.#wiek}
    przedstaw() {console.log(`Jestkm ${this.#imie}, mam ${this.#wiek} lat`)}
    static formatujImie(imie) {
        return imie.charAt(0).toUpperCase() + imie.slice(1)
    }
}

const Marek = new Osoba("maarek", 67)
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

try {
    Areczek.wiek = "67" 
} catch (error) {
    console.error(error.message);
}

try {
    Areczek.wiek = -67 
} catch (error) {
    console.error(error.message);
}

