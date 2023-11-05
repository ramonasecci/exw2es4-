/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let cameraLetto = {
    l1 : 20,
    l2 : 90,
}

function area(rettangolo){

    totArea = rettangolo.l1 * rettangolo.l2     
    return totArea

}

let areaCamera = area(cameraLetto)

console.log(areaCamera)
*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

function crazySum(a,b) {

    let ris 

    if(a===b){
        ris = (a+b)*3
    }else{
        ris = a+b
    }
    return ris 

}

console.log(crazySum(3,3))

*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
function crazyDiff(x){

    let ris 
    let par1 = Math.abs(x - 19)

    
    if(x > 19){
        
        let r1 = par1
        let r2 = par1*3
        ris = [r1,r2]        
    }else{
        ris = par1
    }
    


    return ris

}

console.log(crazyDiff(50))
*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
function boundary(n){

    let ris


    if(n>20 && n<=100 || n===400 ){

        ris = true
 
    }else{
        ris= false
    }
    return ris

}

console.log(boundary(40))
*/



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function epify(commento){
    
    const word1 = "EPICODE"
    let i = word1.length     
    let check = commento.slice(0,i)
    let output
    if(check.toUpperCase() === word1){   
         output = commento
     }else{
         output = word1.concat(commento)
     }
    return output
    
}

console.log(epify("epicode è un "))
*/


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function check3and7(x){
    xA = Math.abs(x)
    let m3 = xA % 3
    let m7 = xA % 7
    let ris
    if (m3 == 0 || m7 == 0){
        ris = (`Il numero ${x} è multiplo di 3 o di 7`)
    }else {
        ris = (`Il numero ${x} non è multiplo di 3 o di 7`)

    }
    return ris
}

console.log(check3and7(8))
*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function reverseString(word) {
    let reverse = "";
    for (var i = word.length - 1; i >= 0; i--) {
        reverse += word.charAt(i);
    }
    return reverse;
}
console.log(reverseString('epicode'));
*/
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function upperFirst(ph){
    let phrase = ph.split(" ");
    let firstUpper = "";
    for (let i = 0; i < phrase.length; i++){
    firstUpper += phrase[i].charAt(0).toUpperCase() + phrase[i].slice(1) + " ";
}
return firstUpper
}

console.log(upperFirst('oggi voglio andare in montagna'));
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
function cutString(stringa){
    let lastC = stringa.length;
    let newStringa = stringa.slice(1,lastC-1);
    return newStringa
}
console.log(cutString("mamma"));
*/
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function giveMeRandom(n){
    let array = [];
    let val;
    for(let i=0; i < n; i++){
        val = Math.floor(Math.random()*11);
        array.push(val);
    }
    return array
}


console.log(giveMeRandom(9));
*/