const repeatString = function(str, times) {
    let result = "";
    if (times >= 0){
        for (let i = 0; i < times; i++){
            result = result.concat("",str);
        }
    }
    else{
        return "ERROR";
    }
    return result;
    
};

// Do not edit below this line
module.exports = repeatString;
