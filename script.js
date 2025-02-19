document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#Intro", {
    speed: 50,
    waitUntilVisible: true,
    afterComplete: function() {
        document.getElementById("Button").classList.add("visible");
    }
  })
    .type("Helo", { delay: 300 })
    .move(-1)
    .type("l")
    .move(null, { to: "END" })
    .type(" and welcome to my website")
    .pause(300)
    .type(" this is a small portflio website")
    .move(-11)
    .type("o")
    .move(null, { to: "END" })
    .type("")
    .pause(500)
    .pause(500)
    .delete(100)
    .type("Im a software developer and i like to code things")
    .pause(300)
    .delete(6)
    .type("funny things")
    .break({ delay: 500 })
    .type("(this is my first website so if you find some bugs, im sorry lol)")
    .pause(500)
    .delete(200)
    .type("<em>Greetings Niklas</em>")
    .go();
});

document.getElementById("Button").addEventListener("click", function() {
    let img = document.getElementById("zoomImage");
            img.style.transform = "scale(2)"; // Zoom-Faktor (1.5x)
            img.classList.add("zoomed");


    setTimeout(function(){
        window.location.href = "home.html"; // Ersetze mit der Zielseite
    }, 300);
});
