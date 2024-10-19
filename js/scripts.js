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
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}

const higher = higherNumber (3,2,9);
const higher2 = higherNumber(5,8,1);

console.log(higher)
console.log(higher2)


function divisibleNumber(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "El numero es divisible por 3 y por 5";
  } else if (number % 3 === 0) {
    return "El numero es divisible por 3";
  } else if (number % 5 === 0) {
    return "El numero es divisible por 5";
  }
}
const div = divisibleNumber(20)
const div2= divisibleNumber(15)
const div3= divisibleNumber(9)

console.log(div)
console.log(div2)
console.log(div3)

function evenNumber(number) {
  if (number % 2 === 0) {
    return"Es un numero par";
  } else {
    return "Es un numero impar";
  }
}

const even = evenNumber(19)
const even2 =  evenNumber (20)

console.log(even)
console.log(even2)

function leapYear(year) {
  if (year % 4 === 0) {
    return "Es un año bisiesto";
  } else {
    return "No es un año bisiesto";
  }
}

const leap = leapYear (2023)
const leap2= leapYear (2024)

console.log(leap)
console.log(leap2)

function digitCounter (number){;
  if (number > 99 && number < 999){
    return "Tiene 3 digítos"
  }else{
    return "No tiene 3 digítos";
  }
}

const digit = digitCounter(23);
const digit2= digitCounter (356);

console.log(digit);
console.log(digit2);

function divisorNumber (n1, n2){
  if(n2 % n1 ===0){
    return "Es multiplo del segundo numero"
  }else{ 
    return "No es multiplo del segundo numero"
  }
  }

  const numbers = divisorNumber (50,100)
  const numbers2 = divisorNumber( 20, 153)

  console.log(numbers)
  console.log(numbers2)

  function doubleNumber (numb1, numb2){
    if(numb2 *2 === numb1){
      return "El primer numero es el doble del segundo numero"
    }else if ( numb1 *2 === numb2){
      return "El segundo numero es el doble del primer numero"
    }else{
      return "Ninguno de los dos numeros es el doble del otro"
    } 
    }
  
    const double = doubleNumber(5,10)
    const double2 = doubleNumber (20,10)
    const double3 = doubleNumber (30,20)

    console.log(double)
    console.log(double2)
    console.log(double3)

    function orderNumbers (nu1, nu2, nu3){
      if ( nu1 > nu2  && nu1 > nu3){
        return (nu1, nu2, nu3)
      }else if (nu1> nu3 && nu3 > nu2){
        return (nu1, nu3, nu2)
      }else if (nu2> nu1 && nu1 > nu3 ){
        return (nu2, nu1, nu3)
      }else if (nu2 > nu3 && nu3 > nu1){
        return (nu2, nu3, nu1)
      }else if (nu3 > nu1 && nu1 > nu2){
        return (nu3, nu1, nu2)
      }else {
        return (nu3, nu2, nu1)
      }
    }

    const order = orderNumbers (7,8,9)
    const order1 = orderNumbers (5,2,7)
    const order2 = orderNumbers (3,10,2)

    console.log (order)
    console.log(order1)
    console.log(order2)