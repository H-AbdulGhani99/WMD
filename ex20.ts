const countrieslist:string[] = ["Afghanistan",
"Albania",
"Algeria",
"Andorra", 
"Angola", 
"Antigua",
"Argentina",  
"Armenia",
"Australia",
"Austria",
  ];

 const phoneCodes = [
    "+93",
    "+355",
    "+213",
    "+376",
    "+244", 
    "+1 268",
    "+54", 
    "+374", 
    "+61", 
    "+43", 
    "+994"
  ];


const country= {
    name:countrieslist,
    code_number:phoneCodes
}

for(let x in (country.name))
{
    console.log(`name = ${country.name[x]} and Phonecodes = ${country.code_number[x]} `)
}