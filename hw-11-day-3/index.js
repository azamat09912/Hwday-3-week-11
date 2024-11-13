//1 TAPSIRMA



let surak1
let mumkindik = 2;

while (mumkindik > 0) {
    surak1 = prompt("kazakh khandygynyn kurulgan zhyly")

    if (surak1 == 1465) {
        alert("Siz surakka durus zhauap berdiniz, molodez!")
        break;
    } else {
        mumkindik--;
        if (mumkindik > 0) {
            alert("siz ate zhauap berdiniz 1 mumkindik kaldy.")
        } else {
            alert("Sizde mumkindik kalmady taryh okysai.")
        }
    }
}


//2-TAPSYRMA
let student = prompt("Студенттер санын енгізіңіз:")
let san = 0;

for (let i = 1; i <= student; i++) {
    let sandar = prompt(i + "-студенттің бағасын енгізіңіз:")
    san += Number(sandar)
}

let sam = san / student;
alert("Студенттердің бағаларының орташа мәні: " + sam)


