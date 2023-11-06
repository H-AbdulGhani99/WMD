// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians = ["wilson","alex","jerry","tim","David"]

function show_magicians(name:string[]):void{
    for(let x in name)
    {
        console.log(`${name[x]}`)
    }
}
function make_great(name:string[]):string[]
{
    for(let x in name)
    {
        let great = "The Great "
        name[x]= great+name[x]
    }
    return name
}

make_great(magicians)

show_magicians(magicians)