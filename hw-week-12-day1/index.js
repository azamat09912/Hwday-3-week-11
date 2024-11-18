function word(soz1, soz2) {
    return soz1.toLowerCase() == soz2.toLowerCase() ? "Sozder birdei" : "sozder arturli";
}


let soz1 = prompt("Birinshi soz")
let soz2 = prompt("ekinshi soz")
alert(word(soz1, soz2))

