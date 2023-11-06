// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["John","tim","wilson","johnson","smith","Sam","Adam"]
let new_users = ["wilson","alex","jerry","tim","David"]

for(let x=0; x<new_users.length;x++)
{
    let count = 0
    for(let y=0; y<current_users.length; y++)
    {
        if(new_users[x].toLowerCase()== current_users[y].toLowerCase())
        {
            console.log(`${new_users[x]} is not available, Enter new user name`)
            count++
        }

    }
    if(count == 0)
        {
            console.log(`${new_users[x]} is avalaible for username`)
        }
}

