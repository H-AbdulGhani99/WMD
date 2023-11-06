// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

let magicians = ["wilson","alex","jerry","tim","David"]

function show_magicians(name:string[]):void{
    for(let x in name)
    {
        console.log(`${name[x]}`)
    }
}

show_magicians(magicians)