const calculaValorTotalDaCompra = (produtos, cidade, caixa, fretes) => {

    let valorCompra = 0;
    for(produto of produtos) {
        if(caixa.has(produto))
            valorCompra += caixa.get(produto);
    }

    valorCompra += fretes.get(cidade);
    return valorCompra;

}

let caixa = new Map();
caixa.set('Arroz', 7.10);
caixa.set('Feijão', 2.30);
caixa.set('Macarrão', 4.70);
caixa.set('Refrigerante', 3.00);

let fretes = new Map();
fretes.set('São Paulo', 10.10);
fretes.set('Rio de Janeiro', 12.30);
fretes.set('Brasília', 14.70);
fretes.set('Outros', 13.00);

console.log(calculaValorTotalDaCompra(['Arroz','Feijão'], 'São Paulo', caixa, fretes));