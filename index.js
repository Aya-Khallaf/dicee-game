var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



var randomNumber3 = Math.floor(Math.random() * 6) + 1;

var randomImageSource3 = "images/dice" + randomNumber3 + ".png";

document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);


if(randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} 
else if(randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} 
else if(randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 3 Wins";
}
else if(randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3) {
    document.querySelector("h1").innerHTML = "All Players Have Tied!";

}
else if(randomNumber2 === randomNumber3){
    document.querySelector("h1").innerHTML = "Player 2 & Player 3 Have Tied!";

} 
else if(randomNumber1 === randomNumber3) {
    document.querySelector("h1").innerHTML = "Player 1 & Player 3 Have Tied!";

} 
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 & Player 2 Have Tied!";
}
