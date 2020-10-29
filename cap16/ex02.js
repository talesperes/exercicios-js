class VideoGame {
    constructor(marca, nControles, tipoMidia) {
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
}

class PlayStation extends VideoGame{
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais) {
        super(marca, nControles, tipoMidia);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

let ps5 = new PlayStation('Sony', 1, 'Digital', 3, 220, "Cabo HDMI");
console.log(ps5);