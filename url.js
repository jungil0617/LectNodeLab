const url = require('url');

const { URL } = url;
const myUrl = new URL('https://github.com/jungil0617/LectNodeLab.git');

console.log('new URL():', myUrl);
console.log('url.format():', url.format(myUrl));
console.log('-----------------------');

const parsedUrl = url.parse('https://github.com/jungil0617/LectNodeLab.git');

console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));