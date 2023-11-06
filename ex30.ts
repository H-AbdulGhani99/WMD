// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let person_age = []     // we create an array to test the whole scnerio
if(person_age.length>0)
{
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
} 
else
{
        console.log("We need to find some users!")
}