const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
// exports로 보내줘야 함