const { odd, even } = require('./var');
const checkNumber = require('./func');

const os = require('os');
const path = require('path');
const fs = require('fs').promises;

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));