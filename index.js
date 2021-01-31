var num = document.querySelectorAll(".drum").length;

for(var i=0;i<num;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});
function makesound(key){
  switch (key) {
    case "w":
        var tom1= new Audio("tom-1.mp3");
        tom1.play();
    break;

    case "a":
        var tom1= new Audio("tom-2.mp3");
        tom1.play();
    break;

    case "s":
        var tom1= new Audio("tom-3.mp3");
        tom1.play();
    break;

    case "d":
        var tom1= new Audio("tom-4.mp3");
        tom1.play();
    break;

    case "j":
        var tom1= new Audio("snare.mp3");
        tom1.play();
    break;

    case "k":
        var tom1= new Audio("crash.mp3");
        tom1.play();
    break;

    case "l":
        var tom1= new Audio("kick-bass.mp3");
        tom1.play();
    break;
    default:

  }
}

function buttonAnimation(btn) {
  var activeKey = document.querySelector("."+btn);
  activeKey.classList.add("pressed");
  setTimeout(function() {
    activeKey.classList.remove("pressed");
  },100);
}
