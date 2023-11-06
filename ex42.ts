let magicians = ["wilson","alex","jerry","tim","David"]
let great_magicians = magicians.slice()

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

make_great(great_magicians)
console.log("Original Array by calling function")
show_magicians(magicians)
console.log("Modified Array by calling function")
show_magicians(great_magicians)

console.log("\nOriginal Array without calling functions")
console.log(magicians)
console.log("Modified Array without calling function")
console.log(great_magicians)

