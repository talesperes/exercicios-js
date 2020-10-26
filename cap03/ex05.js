let removeDuplicatas = (array) => {
    return array.reduce((total, value) => {

        if(!total.find( v => v == value))
            total.push(value);

        return total;
        
    }, []);
}

console.log(removeDuplicatas([1,2,3,3,4,5]));