const somaFaturamento = (valores) => {
    let soma = 0;
    for(valor of valores) {
        soma += valor;
    }
    return soma;
}

console.log(somaFaturamento([1,2,3,4]))