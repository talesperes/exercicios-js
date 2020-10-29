let clonaObjeto = (obj) => {

    let objProperty = Object.getOwnPropertyNames(obj);
    let newObj = {};

    objProperty.forEach( property => newObj[property] = obj[property] );

    return newObj;

}

let ovelha = { nome: 'Dolly', comprimento: 1.5, peso: 160 };

console.log(clonaObjeto(ovelha));