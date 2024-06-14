let tab = [2, 5, 7, 9]

for (let i = 0; i < tab.length; i++) {
    console.log(`for ${tab[i]} = ${tab[i] * tab[i]}`)
}

for (let i of tab) {
    console.log(`for of ${i} = ${i * i}`)
}

for (let i in tab) {
    console.log(`for in ${tab[i]} = ${tab[i] * tab[i]}`)
}

tab.forEach(function(element) {
    console.log(`forEach ${element} = ${element *element}`)
})