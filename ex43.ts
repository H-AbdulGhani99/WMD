// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.

function sandwichfun(...name)
{
    console.log("Items of the Sandwhich that is being ordered includes  ")
    for(let x in name)
    {
        console.log(name[x])
    }
    console.log("//////////////////////////////")
}
sandwichfun("Two slices of bread", "Sliced turkey", "Lettuce", "Tomato slices", "Cheese", "Mayonnaise", "Mustard")
sandwichfun("Whole grain bread", "Grilled chicken", "Spinach", "Avocado slices", "Swiss cheese", "Hummus", "Pesto sauce")
sandwichfun("Two slices of bread","Swiss cheese","Chiken Spread")

