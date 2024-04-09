//test
// alert("ciao")

/**
 * Description: la funzione che genera numero ne dato range
 * @param {number} min
  * @param {number} max
  * @returns {any}
  */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Description; la funzione che definisce se un num e pari o disp
* @param {number} numTocheck
 * @returns {stringa} pari /dispari
 */
function isEvenOdd(numTocheck) {
    if (numTocheck % 2 == 0) {
        return "pari";
    }else {
        return "dispari";
    }
} 