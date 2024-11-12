
let number = +(prompt("kez kelgen sansi engiziniz"));

console.log("3ке және 5ке калдыксыз болынетын сандар");

for (let i = 1; i <= number; i++) {
  
    if (i % 3 && i % 5 ) {
        console.log("Сан:", i, "- 3-ке және 5-ке бөлінеді");
    }
    
    if (i % 2) {
        console.log("Жұп сан табылды, цикл тоқтатылды.");
        break;
    }
}
