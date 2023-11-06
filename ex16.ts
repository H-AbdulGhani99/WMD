// Shrinking Guest List: You just found out that your 
// new dinner table won’t arrive in time for the dinner, and you 
// have space for only two guests.
// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them 
// know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
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

console.log("I can Only invite two persons because of the timings of the hotel")
for(let x=5;x>=0;x--)
{
    if(x<2)
    {
        if(x==1)
        {
            console.log(invited_people)
            console.log(`Dear ${invited_people[x]}, You are invited to the dinner once again`)
            invited_people.pop()
        }
        else
        {
            console.log(`Dear ${invited_people[x]}, You are invited to the dinner once again`)
            invited_people.pop()
        }  
    }
    else
    {
        let uninvited = invited_people.pop();
        console.log(`Sorry ${uninvited}, I cannot invite you to the dinner`)    
    }
}
console.log(invited_people)
