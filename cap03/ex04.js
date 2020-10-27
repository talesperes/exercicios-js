let validaParenteses = (parenteses) => {
    
    let parentesesArray = parenteses.split('');

    let resultado = parentesesArray.reduce((total, parentese) => {

        if((total == 0 && parentese == ')') || (total == 1 && parentese == ')'))
            total--;
        else if((total == 0 && parentese == '(') || (total == 1 && parentese == '('))
            total++;

        return total;

    }, 0);

    if(resultado == 0)
        return true;
    else 
        return false;

}

console.log(validaParenteses('()()()'))