const sumAll = function(leftNumber, rightNumber) {
    let result = 0;

    if (leftNumber < 0 || rightNumber < 0 || typeof(leftNumber) != "number" || typeof(rightNumber) != "number") {
        return "ERROR";
    }
    else if (leftNumber > rightNumber) {
        leftNumber = leftNumber ^ rightNumber;
        rightNumber = leftNumber ^ rightNumber;
        leftNumber = leftNumber ^ rightNumber;
    }

    for (let i=leftNumber; i<=rightNumber; i++) {
        result+=i;
    }

    return result;
};

// Do not edit rightNumberelow this line
module.exports = sumAll;
