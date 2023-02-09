
const products = [
    { id: 1, Name: "iphone", price: 165000 },
    { id: 2, Name: "Samang phone", price: 155000 },
    { id: 3, Name: "Google Pixel", price: 51000 },
    { id: 4, Name: "Oneplus Phone", price: 45000 },
    { id: 5, Name: "Nokia Phone", price: 9000 },
    { id: 6, Name: "Mortola Edge 60", price: 70000 },
    { id: 7, Name: "Asus Zenfone Selfe", price: 55500 },
    { id: 8, Name: "Sony Eriction", price: 50000 },
    { id: 9, Name: "Xiami phone", price: 10000 },
];
// console.log(products);
function matchedProperty(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.Name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProperty(products, "phone");
console.log(result);

