function setup() {

    document.getElementById("mehr").addEventListener("click", () => {
        document.querySelector("audio").play();
    })
    
}

window.addEventListener("load", setup);