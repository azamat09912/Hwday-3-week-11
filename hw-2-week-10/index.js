//1
let curs = (prompt("Курс нөмірін енгізіңіз (1/2/3/4)"))
let isAlmaty = prompt("Сіз Алматыдан келдіңіз бе? yes/no")

if (curs < 3 && isAlmaty === "no") {
    alert("Сізге жатақханадан орын беріледі")
} 
else {
    alert("сізге жатақханадан орын берілмейді")
}

//2
alert("Ойын шарты: дұрыс жауап берілген әр сұрақа 1 бал беріледі")

let score = 0;

let surak1 = prompt("Қазақстанның тәуелсіздігін қашан алды?");
console.log("жауап:", surak1)

if (surak1 == 1991) {
    score += 1;
}

let surak2 = prompt("Қазір қай қалада оқып жатсыз?");
console.log("жауап", surak2);

if (surak2 === "Almaty") {
    score += 1;
}

alert("Сіздің жинаған ұпайыңыз: " + score);
