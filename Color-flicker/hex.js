let hexColors = [0,1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F'] 
//hex color uses  0,1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F,and then 10 tp print the colors
let BodyBtn = document.getElementById("btn")
let BodyContainerSpanTag = document.querySelector(".Body-containerSpanTag")
BodyBtn.addEventListener("click",(e)=>{
    //get random hex code using "hexcolors" Array
    //here in hex we only will have 6 digits so for that we are looping for 6 times 
    // and each iteration we are calling randomHexColorGenerator() to generate random
    // digit using hexColors[] and appending into hexCode to create "#718B65" color
    let hexCode = "#" 
    for (let i=0; i<6; i++){
        hexCode += hexColors[randomHexColorGenerator()]
    }
    document.body.style.backgroundColor = hexCode;
    BodyContainerSpanTag.textContent = hexCode;
})

function randomHexColorGenerator(){
    // here Math.floor() provides the rounds of a to a lower number eg: math.floor(1.4) gives as "1"
    //here below we are multiplying the Math.random() with our simpleColors.length to get the random numbers
    // b/w 0-9
    return Math.floor(Math.random()*hexColors.length);
}