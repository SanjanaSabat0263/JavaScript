/*
1.Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like `"Making green tea"` when called with "green tea".
Store the result in a variable named 'teaOrder'.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

/*
2.Create a function named 'orderTea' that takes one parameter, 'teaType'.Inside this function, create another function named 'confirmOrder' that returns a message like `"Ordered confirmed for chai"`.
Call 'confirmOrder' from within 'orderTea' and return the result.
*/

function orderTea(teaType) {
    function confirmOrder() {
        return `Ordered confirmed for chai`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);
/*
3.Write a arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'.
Store the result in a variable named 'totalCost'.
*/
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(449, 100);
console.log(totalCost);

/*
4.Write a function named 'processTeaOrder' that takes another function, 'makeTea' as a parameter and calls it with the argument '"earl grey"'.
Return the result of calling 'makeTea'.
*/
function makeTea(typeOfTea) {
 return `makeTea:${typeOfTea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}
let order=processTeaOrder(makeTea);
console.log(order);
/*
5.Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType', and return a message like `"Making green tea"`.
Store the result in a variable named 'teaMaker' and call it with'"green tea"'.
*/
function createTeaMaker() {
    return function (teaType) {
        return `Making ${teaType}`;
    };
}

let teaMaker = createTeaMaker();
let teamaker = teaMaker("green tea");
//console.log(teaMaker("green tea"));
console.log(teamaker);
