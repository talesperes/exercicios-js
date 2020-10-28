let isListaVazia = (list) => {
    let iterator = list[Symbol.iterator]()
    return iterator.next().done;
}

let lista = [1,2];

console.log(isListaVazia(lista));