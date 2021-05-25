var randomVariable1= Math.floor((Math.random()*6)+1);
document.querySelector(".img1").src="images/dice"+randomVariable1+".png";
var randomVariable2= Math.floor((Math.random()*6)+1);
document.querySelector(".img2").src="images/dice"+randomVariable2+".png";

if(randomVariable1>randomVariable2){
  document.querySelector("h1").innerText="Player 1 wins";
}
else if(randomVariable1<randomVariable2){
  document.querySelector("h1").innerText="Player 2 wins";
}
else{
  document.querySelector("h1").innerText="Its a draw";
}
