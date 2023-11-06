// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size:string,text:string):void{
    if(size == "medium" || size == "large")
    {
        let defaulttext = "I love TypeScript"
        console.log(`Shirt has size of ${size} and its text is "${text}" and "${defaulttext}"`)
    }
    else
    {
        console.log(`Shirt has size of ${size} and its text is "${text}"`)   
    }
}

make_shirt("32","Never Give UP")
make_shirt("medium","NO")
make_shirt("large","Yes")