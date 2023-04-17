const removeFromArray = function(array, ...args) {
    let newArray = [];

    for (let i=0; i<array.length; i++){
        let j=0;
        while (array[i] !== args[j] && j < args.length){
            j++;
        }
        if (j == args.length){
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
