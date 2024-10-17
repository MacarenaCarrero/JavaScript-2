function adult (name, age){
    if(age >= 18){
        console.log ('Hola ' + name + ' eres mayor de edad ');
    } else if (age <18){
        console.log ('Hola ' + name + ' eres menor de edad ')
    }
    }
  
adult('Macarena' , 19 );
adult('Fulanito', 15)


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


function qualification (number){ 
    if(number <5 ){ ;
        console.log('Suspenso');
    }else if( number <8){;
        console.log ('Aprobado');
    }else{ ( number =>8);
        console.log ('Matrícula de honor');
    }
    }

    qualification(5);
    qualification(3);
    qualification(9);

    