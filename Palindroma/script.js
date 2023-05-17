/*
    chiedere all'utente di inserire una parola con un prompt
    creare una funzione di controllo 
    SE (funzione(parola inserita) è uguale a parola inserita)
        stampa HAI INSERITO UNA PAROLA PALINDROMA
    ALTRIMENTI
        STAMPA NON HAI INSERITO UNA PAROLA PALINDROMA
*/

const wordReverse = prompt('inserisci una parola e ti dirò se è palindroma!');

function isPalindrom() {
    let reversedWord = ''
    for (let i = wordReverse.length - 1; i >= 0; i--) {
        
        reversedWord += wordReverse[i];
    }

    if (wordReverse == reversedWord) {
        return true;
    }
    return false;
}


if (isPalindrom(wordReverse)) {
    console.log('La parola inserita è palindroma!');
    document.getElementById('result').innerHTML = 'La parola inserita è palindroma!';
} else {
    console.log('la parola inserita non è palindroma!');
    document.getElementById('result').innerHTML = 'La parola inserita non è palindroma!';
}

