// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series 
// of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
const car_names = ["Ford","Tesla","Honda","Mercedes"]
for(let x in car_names)
{
    console.log(`I Would Love to Drive ${car_names[x]}`)
}
