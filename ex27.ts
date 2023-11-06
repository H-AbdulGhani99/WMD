// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

let person_age = [2,4,10,13,19,32,67]   // we create an array to test the whole scnerio
for(let x in person_age)
{   
        if(person_age[x]>=2 && person_age[x]<4)
        {
            console.log("You are toddler")
        }
        else if (person_age[x]>=4 && person_age[x]<13)
        {
            console.log("You are kid")
        }
        else if(person_age[x]>=13 && person_age[x]<20)
        {
            console.log("You are teenager")
        }
        else if (person_age[x]>=20 && person_age[x]<65)
        {       
            console.log("You are an adult")
        }
        else if (person_age[x]>=65)
        {
            console.log("You are an elder")
        }
    
} 