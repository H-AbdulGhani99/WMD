let alien_color = ["red","green"]
for(let x in alien_color)
{
if(alien_color[x] == "green")
{
    console.log("Player just earned 5 points for shooting the alien")
}
else if (alien_color[x]!= "green")
{
    console.log("Player just earned 10 points")
}
}