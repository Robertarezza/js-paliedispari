const user = prompt("dimmi pari o dispari");
console.log(user);

const userNumber = parseInt(prompt("Dimmi un numero tra 1 e 10"));
console.log(userNumber);

const computerNumber = getRndInteger(1, 10);
console.log(computerNumber);


const sum = userNumber + computerNumber;
console.log(sum);

const controllo = isEvenOdd(sum)
console.log(controllo);

let message = document.getElementById("result");
//let message = "";

if(user === controllo) {
    message.innerHTML = "Congratulazioni hai vinto"
}else {
    message.innerHTML = "Mi dispiace, hai perso ritenta sari più fortunato"
}