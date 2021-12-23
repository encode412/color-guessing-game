var numofsquares = 6;
var colors =  generateRandomColors(numofsquares);
var squares  = document.querySelectorAll(".square");
 var pickedColor = colors[3];
var colordisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var pickedColor = pickColor(); 
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//for(var i = 0; i < mode.length; i++) {
    

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    numofsquares = 3;
    colors = generateRandomColors(numofsquares);
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
       if(colors[i]){
            squares[i].style.background = colors[i];
    }
    else {
        squares[i].style.display = "none";
    }
}
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    numofsquares = 6
    colors = generateRandomColors(numofsquares);
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
}
});
resetButton.addEventListener("click", function(){
//generate all new colors
colors =  generateRandomColors(numofsquares);
//pick new random colors from array
pickedColor = pickColor();
//change colors of squares
colordisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
}
h1.style.background = "steelblue";
messageDisplay.textContent = "";
this.textContent = "New Colors"
});
 colordisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {
    // add initial colors to square
    squares[i].style.background = colors[i];
// add click-listeners to squares
squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color to picked color
    console.log(clickedColor, pickedColor)
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        resetButton.textContent = "Play Again";
        h1.style.background = clickedColor
    }
            else{
            this.style.background = "#232323";
            // alert("wrong");
            messageDisplay.textContent = "Try Again";
        }
      
    
}); 

}  

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
//make an array
var arr = []
//ass num random colors to array
for(var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor())
   
}
//return that array
return arr;
}

function randomColor(){
//pick a "red" from 0-255
var r = Math.floor(Math.random() * 256);
//pick a "green" from 0-255
var g = Math.floor(Math.random() * 256);
//pick a "blue" from 0-255
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + "," + " " + g + ","+ " " + b + ")";
}


