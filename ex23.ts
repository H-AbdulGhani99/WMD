// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'Hilux';
let color = 'white'
let model = '98541'
let brand = "Toyota"
let year= 2023


console.log("Is car == 'Hilux'? I predict True.")
if(car=="Hilux"|| car=="hilux" || car=="HILUX" )
{
    console.log("Your car is 17.6 feet in length")
}

console.log(car=="Mercedes")
if(car=="Mercedes")
{
    console.log("You have a beautiful Car")
}
if(car!="Mercedes")
{
    console.log("You have Hilux")
}

if(color=="red")
{
    console.log(`you have ${color} ${car}`)
}
else if(color =="white") {
    console.log(`you have ${color} ${car}`)
}
else
{
    console.log(`You have other car`)
}

if(year == 2023 || year == 2022){
    console.log("You have a new Car")
}
else if(year >2023){
    console.log("Your car does not Exist")
}

if(car=="Hilux" && model=="98541" && year == 2023 && color == "white" && brand =="Toyota")
{
    console.log(`Your car Details:\n Name = ${car} Model = ${model} Color = ${color} Brand = ${brand} year = ${year}`)
}   
else if(car=="Hilux" || model=="98541" || year == 2023 || color == "white" || brand =="Toyota")
{
    console.log(`Your car Details:\nName = ${car} \nModel = ${model} \nColor = ${color} \nBrand = ${brand} \nyear = ${year}`)
}

let array = [10,30,20,80,60,120]
let search = 120
let index = array.indexOf(search);

if (index !== -1) {
  console.log(`Number ${search} found at index ${index}`);
} else {
  console.log(`Number ${search} not found in the array`);
}


