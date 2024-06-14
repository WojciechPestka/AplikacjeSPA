const count = (function () {
    let bool = true
    return function () {bool = !bool; return bool}
}) ()
console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())
