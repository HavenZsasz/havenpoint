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



} 

window.addEventListener("load", setup);

function start () {
    document.getElementById("kim").play();
}

function stopper() {
    document.getElementById("kim").pause();
}


