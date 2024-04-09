**Pari e Dispari** 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


1. funzioni
1. prima funzione che genera un num random (copia da w3school)

2. funzione che definisce se un numero è pari o dispari
    param= num
    risultato= stringa, pari o dispari

    proc logico
        se il resto della divisione del numero per 2 è 0
            ritorno pari
        altrimenti
            ritorno dispari


proc del programma principale

1. input
    chiedo all'utente pari o dispari
    chiedo all'utente un numero da 1 a 5
    genero un num random da 1 a 5

2. logica
 - sommo num di utente e del pc
 - se il controllo del num pari o dispari restituisce la stessa cosa che ha scelto utente
    utente vince
altrimenti
    utente perde

3. stampo output
