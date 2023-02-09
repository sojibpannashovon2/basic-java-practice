const shoppingCart = {
    mouse: 25,
    keyboard: 10,
    pad: 15,
    pen: 7,
    sunglass: 17
}
// console.log(shoppingCart);
const padCount = shoppingCart['pad'];
// console.log(padCount);
const properties = Object.keys(shoppingCart);
const propertiesValue = Object.values(shoppingCart);

for (let i = 0; i < properties.length; i++) {
    const propertyName3 = properties[i];
    const propertiesValue3 = shoppingCart[propertyName3]
    console.log(i, propertyName3, propertiesValue3);


}

//for in loop
for (let propertyName in shoppingCart) {
    const propertiesValue = shoppingCart[propertyName]
    console.log(propertyName, propertiesValue);
}

// console.log(properties);
// console.log(propertiesValue);
const propertyName = "pen";
const penCount = shoppingCart[propertyName];
// console.log(propertyName, penCount);

shoppingCart.mouse = 100;
// console.log(shoppingCart);
shoppingCart['sunglass'] = 300;
shoppingCart[propertyName] = 999;
// console.log(shoppingCart);