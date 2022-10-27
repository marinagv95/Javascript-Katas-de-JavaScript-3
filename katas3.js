// Exercício 01

function xRunning(lista) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = "x";
    console.log(lista);
    lista[i] = "-";
  }
}
xRunning(["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);

// Exercício 02

function vowelsCounte(lista) {
  let contador = 0;

  let array = [];

  for (let i = 0; i < lista.length; i++) {
    let resultado = lista[i].toUpperCase();

    for (let j = 0; j < resultado.length; j++) {
      if (resultado[j] == "a" || resultado[j] == "A") {
        contador++;
      } else if (resultado[j] == "e" || resultado[j] == "E") {
        contador++;
      } else if (resultado[j] == "i" || resultado[j] == "I") {
        contador++;
      } else if (resultado[j] == "o" || resultado[j] == "O") {
        contador++;
      } else if (resultado[j] == "u" || resultado[j] == "U") {
        contador++;
      }
    }

    array.push(contador);
    contador = 0;
  }

  return array;
}
console.log(
  vowelsCounte(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"])
);

// Exercício 03

function stringTripletGroup(lista) {
  let array = [];
  let string = "";
  for (let i = 0; i < lista.length; i++) {
    if (lista.length % 3 != 0) {
      lista += " ";
    }
    string += lista[i];

    if (string.length == 3) {
      array.push(string);
      string = "";
    }
  }

  return array;
}

console.log(stringTripletGroup("os tres mosqueteiros"));

// Exercício 04

function dominantPet(lista) {
  let contadorC = 0;
  let contadorD = 0;

  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista[i].length; j++) {
      if (lista[i][j] == "c" || lista[i][j] == "C") {
        contadorC++;
      } else if (lista[i][j] == "d" || lista[i][j] == "D") contadorD++;
    }
  }

  if (contadorC > contadorD) {
    return "CAT!";
  } else if (contadorC < contadorD) {
    return "DOG!";
  } else {
    return "DRAW!";
  }
}
console.log(
  dominantPet(["dog", "cAt", "Cat", "doG", "CAT", "Dog", "caT", "DOG"])
);

// Exercício 05

let array = [];

function divisibleList(lista, n) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % n == 0) {
      array.push(lista[i]);
    }
  }

  return array;
}
console.log(divisibleList([14, 25, 32, 50, 35, 30], 5));

//Exercício 06

let arr = [];

function trustMeOrNot(lista, n) {
  for (let i = 0; i < n; i++) {
    arr.push(lista);
  }

  return arr;
}
console.log(trustMeOrNot(true, 8));

// Exercício 07

let array7 = [];

function changeLampStatus(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == false) {
      array7.push(true);
    } else {
      array7.push(false);
    }
  }

  return array7;
}
console.log(changeLampStatus([false, false, true, false, true, true, true]));

// Exercício 08

let array8 = [];

function gradeAverage(lista) {
  let soma = 0;
  let media = 0;

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
    media = soma / lista.length;
  }

  array8.push(media.toFixed(2));

  return array8;
}
console.log(gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]));

// Exercício 09

let array9 = [];

function canvasDeliveriesPercentage(lista) {
  let soma = 0;
  let media = 0;
  let porcentagem;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];

    media = soma / lista.length;

    porcentagem = (media / 10) * 100;
  }

  array9.push(porcentagem.toFixed(2));

  return array9;
}
console.log(
  canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7])
);

// Exercício 10

let array10 = [];

function shouldIGo(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == "R" || lista[i] == "r") {
      array10.push("Stop!");
    } else if (lista[i] == "G" || lista[i] == "g") {
      array10.push("Go!");
    } else if (lista[i] == "Y" || lista[i] == "y") {
      array10.push("Attention!");
    }
  }

  return array10;
}
console.log(shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]));
