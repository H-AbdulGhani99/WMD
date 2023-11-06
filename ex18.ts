let invited_people = ["Sam","Kamal","Babar"]
console.log(invited_people)
console.log(`I am Inviting ${invited_people.length} people to the dinner`)

let NotAvailable_person = "Sam";

console.log(`${NotAvailable_person} is not coming in todays dinner party`)

let new_person = "John"

invited_people.splice(0,1,new_person);

console.log(`Replacing ${NotAvailable_person} with the  ${new_person} `)
console.log(`Now the list has ${invited_people.length} members`)

// Problem no 16
console.log("I found a bigger Table for dinner ");
// Adding element to the first index
invited_people.unshift("bill");
// To add element in the middle of an array
let middle_Index;

if((invited_people.length/2==0)){

    middle_Index = (invited_people.length/2)
}
else{
    middle_Index = Math.floor(invited_people.length/2)
}
invited_people.splice(middle_Index,0,"Leonard")

invited_people.push("Riz")

    console.log(`And i am inviting ${invited_people.length} to the dinner `)
    console.log(invited_people)

console.log("I can Only invite two persons because of the timings of the hotel")
for(let x=0;x<=3;x++)
{
     invited_people.pop()
}
console.log(`Length of list is ${invited_people.length}`)
console.log(invited_people)

for(let x=0; x<=1 ;x++)
{
    invited_people.pop()
}
        
console.log(`Length of list is ${invited_people.length}`)
console.log(invited_people)
