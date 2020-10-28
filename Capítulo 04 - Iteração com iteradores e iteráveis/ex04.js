let criaIterador = (list) => list[Symbol.iterator]()

let lista = [1,2]
console.log(criaIterador(lista).next())
