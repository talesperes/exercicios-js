let calculaAreaTotal = dimensoes => dimensoes.reduce( (soma, dimensao) => {
    return soma + (dimensao.altura * dimensao.comprimento);
}, 0);

var dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ]

  console.log(calculaAreaTotal(dimensoes));