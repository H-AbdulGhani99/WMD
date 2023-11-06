// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and
// two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function carfun(manufacturer:string, model:string, ...other):object
{
    const car = {
        car_manufacturer:manufacturer,
        car_model:model,
        car_infor:other
    }
    return car;
}

console.log(carfun("Honda","qw340"))
console.log(carfun("Honda","qw3421","red","2020"))