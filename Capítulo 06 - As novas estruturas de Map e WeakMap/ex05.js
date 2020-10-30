const deletaAmigos = (amigos, exAmigos) => {

    for(exAmigo of exAmigos) {
        if(amigos.has(exAmigo)) {
            amigos.delete(exAmigo);
            console.log(`${exAmigo} foi deletado!`);
        } else {
            console.log(`${exAmigo} não é seu amigo!`);
        }
    }

}

let amigos = new Map();
amigos.set('João Silva', {idade: 23, sexo: 'masculino'})
amigos.set('Luisa Pimenta', {idade: 18, sexo: 'feminino'})
amigos.set('Julio Marinho', {idade: 52, sexo: 'masculino'})
amigos.set('Marcela Mel', {idade: 27, sexo: 'feminino'})

deletaAmigos(amigos, ['João Silva', 'Luisa Pimenta', 'Arthur Ferreira']);