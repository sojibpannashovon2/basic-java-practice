
function largestNumber(num) {
    let largest = num[0];
    let p = 0;
    while (p < num.length) {
        const index = p;
        const element = num[index]
        if (element > largest) {
            largest = element;
        }
        p++;
    }
    return largest;
}
const array = [12, 15, 167, 24, 100, 200];
const result = largestNumber(array);
console.log(result);