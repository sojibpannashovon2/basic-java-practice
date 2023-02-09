
function findOddNumbers(array) {
    const element = [];
    for (let i = 0; i < array.length; i++) {
        const index = i;
        const item = array[index]
        if (item % 2 != 0) {
            element.push(item);
            // console.log(index, element);
        }
        // console.log(index, item, element);

    }
    console.log(element);

}
const result = [5, 7, 8, 10, 11, 40, 100, 105]
findOddNumbers(result);