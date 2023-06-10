/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arraypadre = [];
   for (var i in objeto) {
      arraypadre.push(arrayhijo = [])
      objeto[i];
      arrayhijo.push(i);
      arrayhijo.push(objeto[i]);
   }
   return arraypadre;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objetonuevo = {};
   var array = string.split("");
   array.forEach((element) => {
       objetonuevo[element] = objetonuevo[element]+1 || 1;
   }); 
   return objetonuevo;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var nuevoarray = [];
   for (var i in string) {
     if (string[i] === string[i].toUpperCase()) {
       nuevoarray.push(string[i]);
     }
   }
   for (var i in string) {
     if (string[i] !== string[i].toUpperCase()) {
       nuevoarray.push(string[i]);
     }
   }
   return nuevoarray.toString().replace(/,/g,"");

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var array = frase.split(" ");
   var resp = [];
   for (var i = 0; i < array.length; i++) {
    resp.push(array[i].split("").reverse().join(""));
   }
   return resp.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var nuevoarray = [];
   var string = numero.toString();
   var array = string.split("");
   for (var i = 0; i <= array.length; i++) {
     nuevoarray.unshift(array[i]);
   } 
   var comp1 = nuevoarray.join().replace(/,/g,"");
   var comp2 = array.join().replace(/,/g,"");
   if (comp1 === comp2) {
     return "Es capicua";
    } 
   if (comp1 != comp2) {
      return "No es capicua";
    }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arrN = [];
   var array = string.split("");
   for(var i = 0; i < array.length; i++) {
      if (array[i] != "a" && array[i] != "b" && array[i] != "c") {
        arrN.push(array[i]);
      }
   }
   return arrN.toString().replace(/,/g,"");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var respuesta = arrayOfStrings.sort(function(a, b){
      return a.length - b.length;
    }
    );
     return respuesta;
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoarray = [];
   for (var i = 0; i < array1.length; i++) {
     for (var j = 0; j < array2.length; j++) {
       if (array1[i] === array2[j]) {
         nuevoarray.push(array1[i]);  
       }
     }
   }
   return nuevoarray;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
