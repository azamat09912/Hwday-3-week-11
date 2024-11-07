let number1 = Number(prompt("Бірінші санды енгізіңіз:"));
let number2 = Number(prompt("Екінші санды енгізіңіз:"));
let number3 = Number(prompt("Үшінші санды енгізіңіз:"));

switch (true) {
    case (number1 >= number2 && number1 >= number3):
        alert("Ең үлкен сан: " + number1);
        break;

    case (number2 >= number1 && number2 >= number3):
        alert("Ең үлкен сан: " + number2);
        break;

    case (number3 >= number1 && number3 >= number2):
        alert("Ең үлкен сан: " + number3);
        break;

    default:
        alert("Мәндерді дұрыс енгізіңіз.");
}
