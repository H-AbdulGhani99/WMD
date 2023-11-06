// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let invited_people = ["Sam","Kamal","Babar"]

for(let invite in invited_people)
{
    console.log(`Hello ${invited_people[invite]}, You are invited to dinner`)
}

let NotAvailable_person:string = "Sam";
console.log(`${NotAvailable_person} is not coming in todays dinner party`)

let new_person:string = "John"
invited_people.splice(0,1,new_person);

for(let invite in invited_people)
{
    console.log(`Hello ${invited_people[invite]}, You are invited to dinner`)
}
console.log("I found a bigger Table for dinner ");
// Adding element to the first index
invited_people.unshift("bill");

let middle_Index;

if((invited_people.length/2==0)){

    middle_Index = (invited_people.length/2)
}
else
{
    middle_Index = Math.floor(invited_people.length/2)
}

invited_people.splice(middle_Index,0,"Leonard")

invited_people.push("Riz")

for(let x in invited_people)
{
    console.log(`Dear ${invited_people[x]}, you are invited to the dinner `)
}
console.log(invited_people)

