function adult(name, age) {
  if (age >= 18) {
    console.log("Hola " + name + " eres mayor de edad ");
  } else {
    console.log("Hola " + name + " eres menor de edad ");
  }
}

adult("Macarena", 19);
adult("Fulanito", 15);

function hightest(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
}

hightest(3, 50);

function typeOfNumber(number) {
  if (number < 0) {
    console.log("Numero negativo");
  } else if (number === 0) {
    console.log("El numero es cero");
  } else {
    number > 0;
    console.log("Es un numero positivo");
  }
}

typeOfNumber(5);
typeOfNumber(-5);
typeOfNumber(0);

function qualification(numberA, numberB, numberC) {
  const average = (numberA + numberB + numberC) / 3;

  if (average + 0 && average < 5) {
    console.log("Suspenso");
  } else if (average >= 5 && average < 8) {
    console.log("Aprobado");
  } else {
    console.log("Matrícula de honor");
  }
}

qualification(5, 3, 5);

function hightest(numberA, numberB, numberC) {
  if (numberA > numberB && numberA > numberC) {
    console.log(numberA);
  } else if (numberB > numberC && numberB > numberA) {
    console.log(numberB);
  } else {
    console.log(numberC);
  }
}

hightest(22, 30, 20);

function divisible(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Es divisible por 3 y por 5");
  } else if (number % 5 === 0) {
    console.log("Es divisible por 5");
  } else if (number % 3 === 0) {
    console.log("Es divisible por 3");
  } else {
    console.log(number);
  }
}

divisible(30);
divisible(20);
divisible(9);

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Es un numero par");
  } else {
    console.log("Es un numero impar");
  }
}

evenOrOdd(9);
evenOrOdd(10);

function leapYear(year) {
  if (year % 4 === 0) {
    console.log("Año bisiesto");
  } else {
    console.log("No es un año bisiesto");
  }
}

leapYear(2024);
leapYear(2023);
