const sumAll = function(val1, val2) {
    let sum = 0;
    let start = 0, end = 0;
    if (val1 < 0 || val2 < 0){
        return "ERROR";
    }
    if (!Number.isInteger(val1) || !Number.isInteger(val2)){
        return "ERROR";
    }
    
    if (val1 > val2){
        start = val2;
        end = val1;
    }
    else{
        start = val1;
        end = val2;
    }
    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
