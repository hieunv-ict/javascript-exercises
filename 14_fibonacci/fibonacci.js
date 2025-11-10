const fibonacci = function(len) {
    len = Number(len);
    if (len == 1 || len == 2){
        return 1;
    }
    else if (len == 0){
        return 0;
    }
    else if (len < 0){
        return "OOPS";
    }
    else{
        return fibonacci(len-2) + fibonacci(len-1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
