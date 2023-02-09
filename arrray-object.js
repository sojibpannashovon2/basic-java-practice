
const elements = ["chair", "table", "pen", 36, "watch"];

const element = elements[2];
elements[4] = "book"
// console.log(element);
// console.log(elements);

const shoppingCart = {
    name: "mobile",
    brandName: "Google Pixel",
    Speachification: {
        model: "Pixel 6 pro",
        processor: 'Google Tensor',
        price: " 65000 BDT",
        wireless_charge: true,
    },
    Available_model: ["pixel 6", "pixel 6a", "pixel 7", "pixel 7 pro"],
    location: "Bangladesh"

}
console.log(shoppingCart.Speachification.price);
console.log(shoppingCart.Available_model[2]);