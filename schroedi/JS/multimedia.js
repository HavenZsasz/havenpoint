function setup() {
    /*
    document.getElementById("mehr").addEventListener("click", () => {
        document.querySelector("audio").play();
    })
    document.getElementById("click-logo").addEventListener("click", () => {
        document.querySelector("audio").play();
    })
    */
    document.getElementById("starter").addEventListener("click", start);
    document.getElementById("stopper").addEventListener("click", stopper);
    document.getElementById("back").addEventListener("click", function() {
        document.getElementById("kim").currentTime = document.getElementById("kim").currentTime - 30;
    });
    document.getElementById("vor").addEventListener("click", function() {
        document.getElementById("kim").currentTime = document.getElementById("kim").currentTime + 30;
    });
    document.getElementById("leiser").addEventListener("click", function() {
        document.getElementById("kim").volume = document.getElementById("kim").volume - 0.1;
    });
    document.getElementById("lauter").addEventListener("click", function() {
        document.getElementById("kim").volume = document.getElementById("kim").volume + 0.1;
    });


    document.getElementById("genial").addEventListener("click", musik);

    zeichnen();


} 

window.addEventListener("load", setup);

function start () {
    document.getElementById("kim").play();
}

function stopper() {
    document.getElementById("kim").pause();
}

/*
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
      function(stream) {
         const video = document.querySelector('video');
         video.srcObject = stream;
         video.onloadedmetadata = function(e) {
           video.play();
         };
      },
      function(err) {
         console.error(`The following error occurred: ${err.name}`);
      }
   );
} else {
   console.log("getUserMedia not supported");
}
*/

function musik(event) {

    event.preventDefault();
    var jukebox = document.getElementById("creator");
    jukebox.src = event.target.href;
    jukebox.play();

}


function zeichnen() {
    var canvas = document.getElementById("grafik");
    var context = canvas.getContext("2d");

   
    context.lineStyle = "#000000";
    context.lineWidth = 1;
    context.fillStyle = "#FFD700";
    context.fillRect(0,0,30,60);
    context.strokeRect(0,0,30,60);

    
}