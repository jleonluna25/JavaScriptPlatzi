//codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado= 6;
console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();
//codigo del triangulo
console.group("Triangulos");

//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " +
// ladoTriangulo2 +"cm, " + baseTriangulo1 +"cm");
//console.log("La altura del triángulo es: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}
//console.log("El perimetro del triángulo es: " + perimetroTriangulo);

function areaTriangulo(base, altura){
    return base*altura;
}
//console.log("El área del triángulo es: " + areatriangulo);
 console.groupEnd();
 //codigo del círculo
console.group("Círculos");
const radioCirculo = 4;
//console.log("El radio del círculo es: "+radioCirculo+"cm");
function diametroCirculo(radio){
    return radio*2;
}
//console.log("El diámetro del círculo es: "+diametroCirculo+"cm");
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
//console.log("El perímetro del círculo es: "+perimetroCirculo+"cm");

function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.log("El área del círculo es: "+areaCirculo+"cm2");
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Reto triangulo isósceles

function alturaIsosceles(){
    const lado1= document.getElementById("lado1");
    const lado2= document.getElementById("lado2");
    const lado3= document.getElementById("lado3");
    var a= 0;
    var b= 0;
    var altura= 0;
    var flag= true;
    switch (true) {
        case lado1.value == lado2.value:
            if (lado1.value != lado3.value){
                a= lado1.value;
                b= lado3.value;
            }else{
                alert("Por favor, introduzca lados válidos para triángulo isósceles!");
                flag= false;
            }
            break;
        case lado1.value == lado3.value:
            a= lado1.value;
            b= lado2.value;
            break;
        case lado2.value == lado3.value:
            a= lado2.value;
            b= lado1.value;
            break;
    }
    if(flag ){
        altura = Math.sqrt(Math.pow(a,2)-Math.pow(b, 2)/4);
        alert("La altura h del triángulo es: "+altura);
    }
    
}



/*if (lado1.value == lado2.value ){
        contador++;
        if(lado1.value == lado3.value){
            contador++;
            if(lado2.value == lado3.value){
                contador++;
            }
        }
    }else if(lado1.value == lado3.value){
        contador++;
        if(lado2.value == lado3.value){
            contador++;
        }
    }else if(lado2.value == lado3.value){
        contador++;
    }*/