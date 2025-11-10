const palindromes = function (str) {
    str = str.toLowerCase();
    let tmp = str.split("");
    let arr = tmp.filter(char => {
        if (char === '!' || char === ',' || char === " " || char === ".") return false;
        else return true;
    })
    let len = arr.length;
    let stack = [];
    if (len % 2 != 0){
        arr.splice(len/2, 1);
        len = arr.length;
    }
    for (let i = 0; i < len/2; i++){
        stack.push(arr[i]);
    }
    for (let i = len/2; i < len; i++){
        if (arr[i] === stack.pop()){
            continue;
        }
        else {
            return false;
        }
    }
    if (stack.length == 0) return true;
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
