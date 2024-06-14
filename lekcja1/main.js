let liczba = document.getElementById("jeden")
let petlap = document.getElementById('petlap');
let rekurencjap = document.getElementById('rekurencjap');
let wynik = document.getElementById("wynik")

petlap.addEventListener("click", function() {
    if (liczba.value < 0 ) {
        alert("liczba musi być większa niż 0")
        return
    } 
    if (liczba.value == "" ) {
        alert("pole nie może być puste")
        return
    } 
    const liczbaa = parseInt(liczba.value);
    let silnia = 1;
    for (let i = 2; i <= liczbaa; i++) {
        silnia *= i;
    }
    wynik.value = silnia
});

rekurencjap.addEventListener("click", function() {
    if (liczba.value < 0 ) {
        alert("liczba musi być większa niż 0")
        return
    } 
    if (liczba.value == "" ) {
        alert("pole nie może być puste")
        return
    } 
    const liczbaa = parseInt(liczba.value);
    const silnia = rekurencyjnie(liczbaa);
    wynik.value = silnia
});

function rekurencyjnie(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * rekurencyjnie(n - 1);
    }
}


