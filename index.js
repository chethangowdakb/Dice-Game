var randomNum1 = Math.floor(Math.random()*6)+1;


var randomNumImageSrc1 = "images/dice" + randomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomNumImageSrc1);

var randomNum2 = Math.floor(Math.random()*6)+1;


var randomNumImageSrc2 = "images/dice" + randomNum2 + ".png";;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomNumImageSrc2);


if(randomNum1 > randomNum2)
{
    document.querySelector("h1").textContent="Player 1 winner";
}
else if(randomNum1 < randomNum2)
{
    document.querySelector("h1").textContent="Player 2 winner";
}
else{
    document.querySelector("h1").textContent="DRAW";
}

//working
