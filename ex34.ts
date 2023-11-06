// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • 
// Modify your program to print a statement about each animal, such as A dog would make a great pet. • 
// Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

let animal = ["cat","dog","horse"]
if(animal.length>0)
{
for(let x=0; x<animal.length;x++)
{
    console.log(animal[x])
}

for(let x=0; x<animal.length;x++)
{
    if(animal[x]=="cat")
    {
        console.log(`${animal[x]} is very cute animal`)
    }
    else if(animal[x]=="dog")
    {
        console.log(`${animal[x]} is very loyal to the human being`)
    }
    else if(animal[x]=="horse")
    {
        console.log(`${animal[x]} is very gentle animal`)
    }
}
console.log("All of these animals would make a great pet!")
}
else
{
    console.log("NO pet found in the list")
}