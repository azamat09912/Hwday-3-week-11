let number = prompt("0 мен 99 арасындағы санды енгізіңіз:");

if (number >= 0 && number <= 9)  {
    alert("Сан: " + number)
} 
else if (number >= 10 && number <= 99) {
    alert("Бірінші сан: " + number[0] + "\n Екыншы сан: " + number[1])
} 
else {
    alert("0 мен 99 арасындағы санды енгізу қажет.")
}
