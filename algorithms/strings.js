const part = 'decimal'.substring(3, 6);
console.log('Red Dragon'.indexOf('Dragon'));


function existsInString(stringValue, search) {
    return stringValue.indexOf(search) !== -1;
}

const stringTest = "An example is counting occurrences of certain letters . In the following example, the occurrences of the character 'a' will be counted:"
const replaced = stringTest.replace('counting', 'doing');
console.log(replaced);
console.log(existsInString(stringTest, 'letterd'));

const reg = /[a-zA-Z0-9] /;
console.log(reg.test(stringTest));


// To parse parameters
const uri = 'http://your.domain/product.aspx?category=4&product_id=225140&query=lcd+tv';
const queryString = {};
uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
    queryString[$1] = $3;
});
console.log('ID: ' + queryString['product_id']);// ID: 2140 
console.log('Name: ' + queryString['product_name']); // Name: undefined
console.log('Category: ' + queryString['category']); //
console.log('query: ' + queryString['query']); //


// node to base64
const base64 = Buffer.from("hello I love learning to computer program").toString('base64');
console.log(base64);
const convertedback = Buffer.from('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0=','base64').toString();
console.log(convertedback);