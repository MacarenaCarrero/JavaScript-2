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

function digits(number) {
  if (number >= 100 || number >= 1000) {
    console.log("Tiene 3 digitos");
  } else {
    console.log("No tiene 3 digitos");
  }
}

digits(320);
digits(20);

function divisible(numberA, numberB) {
  if (numberB % numberA === 0) {
    console.log("Si es multiplo");
  } else {
    console.log("No es multiplo");
  }
}

divisible(20, 100);
divisible(32, 100);

function double(numberA, numberB) {
  if (numberA * 2 === numberB) {
    console.log("El primer numero es doble del segundo");
  } else if (numberB * 2 === numberA) {
    console.log("El segundo numero es el doble del primero");
  } else {
    console.log("Ninguno es el doble del otro");
  }
}

double(20, 10);
double(10, 20);
double(2, 6);

function order(a, b, c) {
  if (a > b && b > c) {
    console.log(a, b, c);
  } else if (a > c && c > b) {
    console.log(numberA, numberC, numberB);
  } else if (numberB > numberA > numberB) {
    console.log(numberB, numberA, numberB);
  } else if (numberB > numberC > numberA) {
    console.log(numberB, numberC, numberA);
  } else if (numberC > numberA > numberB) {
    console.log(numberC, numberA, numberB);
  } else if (numberC > numberB > numberA) {
    console.log(numberC, numberB, numberA);
  }
}

order(1, 6, 3);
