var button = document.querySelector("button");
var bodyColor = "white";

button.addEventListener("click", function(){
  if(bodyColor === "white"){
    document.body.style.background = "blue";
    bodyColor = "blue";
  } else if(bodyColor === "blue"){
    document.body.style.background = "white";
    bodyColor = "white";
  }
});
