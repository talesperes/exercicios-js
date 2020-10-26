let existeProdutosDatados = (produtos, dataReferencia = new Date()) => {
    
    if(dataReferencia)
        dataReferencia = new Date(dataReferencia);

    return produtos.some( produto => new Date(produto.dataValidade) < dataReferencia )
}

var produtos = [
    { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
    { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
    { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
]

console.log(existeProdutosDatados(produtos, '2017-03-01'))