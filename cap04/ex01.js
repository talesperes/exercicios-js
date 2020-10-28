let ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
  ];

let calculaDistancia = (objList) => {

  let iterator = objList[Symbol.iterator]()
  let soma = 0;

  let rua = iterator.next();

  while(!rua.done) {
    soma += rua.value.tamanho;
    rua = iterator.next();
  }

  return soma;

}

console.log(calculaDistancia(ruas));