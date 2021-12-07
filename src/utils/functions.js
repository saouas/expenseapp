
const getKeyByValue = (array, value) => {
    let test = null;
    for(let key = 0; key < array.length; key++){
        test = Object.keys(array[key]).find(el => array[key][el] === value)
        if(test)
            return test;
    }
};

export {
    getKeyByValue
};