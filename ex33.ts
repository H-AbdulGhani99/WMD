// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let fav_pizza =["BBQ pizza","Pepperoni pizza","Stuffed crust pizza"]
for(let x in fav_pizza)
{
    console.log(fav_pizza[x])
}
for(let x in fav_pizza)
{
    console.log(`I like ${fav_pizza[x]}`)
}
console.log("I enjoy a variety of pizza flavors, \nbut my all-time favorites are Margherita with its simplicity and the perfect combination of tomato, mozzarella, and basil. \nI also have a soft spot for spicy pepperoni pizza, with its delightful mix of savory pepperoni and melted cheese. \nFinally, I can't resist a well-made veggie pizza loaded with fresh, colorful toppings. \nI really love pizza")