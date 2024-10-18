function adult(name, age) {
  if (age >= 18) {
    return name + " eres mayor de edad. ";
  } else {
    return name + " eres menor de edad. ";
  }
}

const resultAdult = adult("Macarena", 32);
const resultAdult2 = adult("Macarena", 12);
console.log(resultAdult);
console.log(resultAdult2);

function typeOfNumber(number) {
  if (number < 0) {
    return "Numero negativo";
  } else if (number === 0) {
    return "El numero es cero";
  } else {
    number > 0;
    return "Numero positivo";
  }
}

const resTypeOfNmuber = typeOfNumber(30);
const resTypeOfNmuber2 = typeOfNumber(-20);

console.log(resTypeOfNmuber);
console.log(resTypeOfNmuber2);

function averageGrade(numberA, numberB, numberC) {
  const average = (numberA + numberB + numberC) / 3;

  if (average < 5) {
    return "Suspenso";
  } else if (average <= 8) {
    return "Aprobado";
  } else {
    return "Matricula de honor";
  }
}

const grade = averageGrade(9, 8, 8);
const grade2 = averageGrade(1, 3, 4);

console.log(grade);
console.log(grade2);

function higherNumber(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1);
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2);
  } else {
    console.log(n3);
  }
}

higherNumber(2, 9, 30);
higherNumber(50, 2, 13);
higherNumber(2, 8, 3);

function divisibleNumber(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("El numero es divisible por 3 y por 5");
  } else if (number % 3 === 0) {
    console.log("El numero es divisible por 3");
  } else if (number % 5 === 0) {
    console.log("El numero es divisible por 5");
  }
}

divisibleNumber(15);
divisibleNumber(9);
divisibleNumber(20);

function evenNumber(number) {
  if (number % 2 === 0) {
    console.log("Es un numero par");
  } else {
    console.log("Es un numero impar");
  }
}

evenNumber(9);
evenNumber(10);

function leapYear(year) {
  if (year % 4 === 0) {
    console.log("Es un año bisiesto");
  } else {
    console.log("No es un año bisiesto");
  }
}

leapYear(2024);
leapYear(2023);
