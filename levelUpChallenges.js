/*
1.Write a 'for' loop that loops through an array `["green tea", "black tea", "chai","oolong tea"]` and stops the loop when it finds `"chai"`.
Store all the teas before `"chai"` in a new array called `"slectedTeas"`.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) 
{
    if (teas[i] === "chai") 
        {
            break;
        }
        selectedTeas.push(teas[i]);
    }
console.log(selectedTeas);

/*
2.Write a 'for' loop that loops through the array `["london","new york","paris","berlin"]` and skips `"paris"`.
Store the other cities in a new array called `"visitedCities"`.
*/

let cities = ["london", "new york", "paris", "berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) 
    {
      if (cities[i] === "paris") 
        {
            continue;
        }
        
        visitedCities.push(cities[i]);
      }
console.log(visitedCities);

/* 
3.Use a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and stop when the number '4' in an array named 'smallNumbers'.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num === 4) 
    {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

/*
4.Use a 'for-of' loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip the string "black tea".
Store the other teas in an array called "preferredTeas".
*/

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes)
{
    if (tea === "black tea") 
    {
        continue;
    }
    preferredTeas.push(tea);
}
console.log(preferredTeas);

/* 
5.Use a 'for-in' loop to loop through an object containing city populations.
Stop the loop when the population of "berlin" is found and store all pervious cities population in an new object named "cityPopulation".

let citiesPopulation = {
"london": 8900000,
"new york": 8400000,
"paris": 2200000,
"berlin": 3500000
};
*/
let citiesPopulation = {
    "london": 8900000,
    "new york": 8400000,
    "paris": 2200000,
    "berlin": 3500000
};
let cityPopulation = {};
//console.log(Object.keys(citiesPopulation));
//console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
    if (city === "berlin") 
    {
        break;
    }
   //console.log(citiesPopulation[city]);
   //key = value
   cityPopulation[city] = citiesPopulation[city];
}
console.log(cityPopulation);

/* 
6.Use a 'for-in' loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named'largeCities'.

let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
*/
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities = {};

for (const city in worldCities) {
    if (worldCities[city] < 3000000) 
    {
        continue;
    }
    largeCities[city] = worldCities[city];
}
console.log(largeCities);

/*
7.Write a 'forEach' loop that iterates through an array`["earl grey","green tea","chai","oolong tea"] `.
Stop the loop when`"chai"` is found, and store all the previous tea type in a array named 'availableTeas'.
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
    if (tea === "chai") 
    {
        return;
    }
    availableTeas.push(tea);
});
console.log(availableTeas);
/* 
8.Write a 'forEach' loop that iterates through the array `["Berlin","Tokyo","Sydney","Paris"]`.
Skip the city `"Sydney"` and store the other cities in a new array named 'travelCities'.
*/
let myworldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelCities = [];

myworldCities.forEach(city => {
    if (city === "Sydney") 
    {
        return;
        
    }
    travelCities.push(city);
});
console.log(travelCities);

/* 
9. Write a'for' loop that iterates through an array `[2,5,7,9]`.
Skip the value '7' and multiply the rest by 2.Store the results in a new array named 'doubledNumbers'.
*/
let numbersArray = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === 7) 
    {
        continue;
    }
    doubledNumbers.push(numbersArray[i] * 2);
    
}
console.log(doubledNumbers);

/* 
10. Use a 'for-of' loop to iterate through an array ["chai","green tea","black tea","jasmine tea","herbal tea"] and stops when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named 'shortTeas'.
*/

let teaNames = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teaNames) {
    if (tea.length > 10) 
    {
        break;
    }
    shortTeas.push(tea);   
}
console.log(shortTeas);
