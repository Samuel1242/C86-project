var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
function playSound(){
    var audio = new Audio('bdayaudio.mp3');
	audio.play();
}
