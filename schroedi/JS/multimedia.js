function setup() {

    document.getElementById("mehr").addEventListener("click", () => {
        document.querySelector("audio").play();
    })
    document.getElementById("click-logo").addEventListener("click", () => {
        document.querySelector("audio").play();
    })
    
}

window.addEventListener("load", setup);