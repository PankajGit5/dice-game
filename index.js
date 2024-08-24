
var num1 = Math.floor( Math.random() * 6 )+ 1;


var nums1 = "dice"+num1+".png";

var rans1 = "images/"+nums1;

var img1 = document.querySelectorAll("img")[0];



img1.setAttribute("src", rans1);


var num2 = Math.floor( Math.random() * 6 )+ 1;

var nums2 = "dice"+num2+".png";

var rans2 = "images/"+nums2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",rans2)

if (num2 < num1) {
   document.querySelector("h1").innerHTML=("PLAYER 1");
  } else if (num1<num2){
    document.querySelector("h1").innerHTML=("PLAYER 2");
  }

  else{
    document.querySelector("h1").innerHTML=("draw");

  }

