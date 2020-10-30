const percorreRuas = (ruas, ruaPerigora) => {
    for(rua of ruas) {
        if(rua == ruaPerigora)
            continue;
        console.log(rua);
    }
}

percorreRuas(['Rua 1','Rua 2','Rua 3'], 'Rua 2');