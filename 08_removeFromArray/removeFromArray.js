const removeFromArray = function(arr, ...targets) {
    let result = arr;
    for (let target of targets){
        result = result.filter((item) => item !== target);
    }
    return result;
    
};

// Do not edit below this line
module.exports = removeFromArray;
