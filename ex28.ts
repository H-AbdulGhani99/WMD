// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits =["apple","banana","peach"]
for(let x in favorite_fruits)
{
    if(favorite_fruits.length>0)
    {    
        if(favorite_fruits[x] == "pineapple")
        {
            console.log(`You really like ${favorite_fruits[x]}`)
        }
        if(favorite_fruits[x] == "apple")
        {
            console.log(`You really like ${favorite_fruits[x]}`)
        }
        if(favorite_fruits[x] == "banana")
        {
            console.log(`You really like ${favorite_fruits[x]}`)
        }
        if(favorite_fruits[x] == "grapes")
        {
            console.log(`You really like ${favorite_fruits[x]}`)
        }
        if(favorite_fruits[x] == "mango")
        {
            console.log(`You really like ${favorite_fruits[x]}`)
        }
    }
}