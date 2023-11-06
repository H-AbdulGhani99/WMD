// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object 
// containing these two pieces of information. Use the function to make three dictionaries representing 
// different albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.

function make_album(art_name:string,album_title:string, tracks?:number):object
{ 
    const album = {

    art_name1:art_name,
    album_title1:album_title,
    trackno:tracks

    }
    if(tracks == undefined)
    {
        delete album.trackno
    }
    return album
}
const album1 = make_album("Artist1","t1")
const album2 = make_album("Artist2","t2")
const album3 = make_album("Artist3","t3")
const album4 = make_album("Artist4","t4",16)

console.log(album1)
console.log(album2)
console.log(album3)
console.log(album4)