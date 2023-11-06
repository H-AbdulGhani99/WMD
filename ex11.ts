// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, 
// but each message should be personalized with the person’s name.
const fr_names = ["John","Tom", "Thik","Sam"];
for (let count in fr_names)
{
    console.log("Hello! Dear",fr_names[count]);
}
