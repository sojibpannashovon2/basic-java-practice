
function reverseString(str) {
    const words = str.split(' ');
    const result = [];
    let i = words.length - 1;
    while (i >= 0) {
        const index = i;
        const element = words[i];
        result.push(element);
        i--;
    }
    return result.join(' ');
}
const string = "I am a good boy";
const result = reverseString(string);
console.log(result);