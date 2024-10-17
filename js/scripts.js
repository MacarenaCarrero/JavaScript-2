function adult (name, age){
    if(age >= 18){
        console.log ('Hola ' + name + ' eres mayor de edad ');
    } else{  
        console.log ('Hola ' + name + ' eres menor de edad ')
    }
    }
  
adult('Macarena' , 19 );
adult('Fulanito', 15)


function higher (numberA, numberB){
    if(numberA > numberB){
        console.log ('El '+numberA+ ' es mayor que ' +numberB)
    }else{ 
        console.log( 'El ' +numberB+ ' es mayor que ' +numberA)
    }
}

higher(2,6)
higher(5,2)

function typeOfNumber (number){
    if( number <0){
        console.log ('Numero negativo');
    }else if (number === 0){ ;
        console.log ('El numero es cero');
    }else{ ( number >0);
        console.log ('Es un numero positivo');
}
}

typeOfNumber(5);
typeOfNumber(-5);
typeOfNumber (0);


function averageGrade (numberA, numberB, numberC){
    const average= (numberA + numberB + numberC) /3;
    
    if( average <5){
        console.log('Suspenso');
    }else if (average <= 8){
        console.log('Aprobado');
    }else{ 
        console.log('Matricula de honor');
    }
    }


averageGrade(7,9,9)
averageGrade(2,3,2)
averageGrade(5,4,7)


function higherNumber (n1, n2, n3){
    if(n1 > n2 && n1>n3){
        console.log(n1);
    }else if(n2 > n1 && n2>n3){
        console.log(n2);
    }else{ 
        console.log(n3);
    }
    }

    higherNumber(2,9,30)
    higherNumber(50,2,13)
    higherNumber(2,8,3)
    

    function divisibleNumber (number){
        if(number %3 ===0 && number %5===0){
            console.log('El numero es divisible por 3 y por 5');
        }else if(number %3 ===0){
console.log('El numero es divisible por 3');
        }else if (number %5 ===0){
            console.log('El numero es divisible por 5');

        }
        }

        divisibleNumber(15)
        divisibleNumber(9)
        divisibleNumber(20)
    
        function evenNumber(number){
            if(number %2 ===0){
                console.log('Es un numero par');
            }else{ 
                console.log('Es un numero impar');
            }
        }

        evenNumber(9)
        evenNumber(10)

        function leapYear (year){
            if(year %4 ===0){
                console.log('Es un año bisiesto');
            }else{ 
                console.log('No es un año bisiesto');
            }
        }

        leapYear(2024)
        leapYear(2023)