let simpleColors = ["green","AntiqueWhite","Crimson","DarkCyan","GoldenRod","LightCoral","OrangeRed","RebeccaPurple","Tomato","WhiteSmoke"]
let BodyBtn = document.getElementById("btn")
let BodyContainerSpanTag = document.querySelector(".Body-containerSpanTag")
BodyBtn.addEventListener("click",(e)=>{
    //get random numbers b/w 0-9
    let randomSimpleColors = randomSimpleColorGenerator();
    document.body.style.backgroundColor = simpleColors[randomSimpleColors];
    BodyContainerSpanTag.textContent = simpleColors[randomSimpleColors];
})

function randomSimpleColorGenerator(){
    // here Math.floor() provides the rounds of a to a lower number eg: math.floor(1.4) gives as "1"
    //here below we are multiplying the Math.random() with our simpleColors.length to get the random numbers
    // b/w 0-9
    return Math.floor(Math.random()*simpleColors.length);
}