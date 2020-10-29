const comida = new Comida('Feijão');
class Comida {
  constructor(nome) {
    this.nome = nome;
  }
}

/*
Por que aconteceu este erro? O que é preciso modificar para que o código funcione corretamente?
------------------------------------------------------------------------------------------------------
Diferente de uma function, class não possui o comportamento de hoisting(mover a declaração para o topo do código), com isso para corrigir o código basta declarar a class antes de sua instancia.
*/