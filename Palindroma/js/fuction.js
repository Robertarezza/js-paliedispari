//console.log("miooo");

/**
 * Description: La parola inserita dall'utente è palindoma(letta al contrario ha lo stesso significato)
 * @param {string} //parola da controllare
 * @returns {boolean} // se è palindroma è true, atrimenti false
 */
function palindroma(wordToCheck) {

    let result = false;
    let ds = wordToCheck.length - 1;

    for (let sd = 0; sd < wordToCheck.length; sd++) {
        const wordSD = wordToCheck.charAt(sd);
        const wordDS = wordToCheck.charAt(ds);
        //console.log(newWord );

        if (wordSD === wordDS) {
            result = true;
            //console.log("ok", result);
        } else {
            result = false
            //console.log("no", result);

        }
        ds--;
        return result
    }



}