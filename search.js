const string = "Ami Tomer Moner vitor ak Var gure aste ache jay"

console.log(string.toLowerCase());
const result = string.toLowerCase();
const doesExists = result.includes('var');
console.log(doesExists);

if (result.indexOf("a2k") != -1) {
    console.log("The word is exit at the string");
}
else {
    console.log("Doesnot Exit !!!");
}