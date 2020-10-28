let soletaPalavra = (palavra) => {

    let iterator = palavra.split('')[Symbol.iterator]()
    let letra = iterator.next();
    
    while(!letra.done) {
        console.log(letra.value);
        letra = iterator.next();
    }

}

let palavra = "SOLETRANDO"
soletaPalavra(palavra);