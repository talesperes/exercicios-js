const percorreRuas = (listaRuas, stopRua) => {
    for(rua of listaRuas) {
        console.log(rua)
        if(rua == stopRua)
            break;
    }
}

percorreRuas(['Rua 1','Rua 2','Rua 3'], 'Rua 2')