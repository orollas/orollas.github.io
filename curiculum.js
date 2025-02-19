document.addEventListener("DOMContentLoaded", function () {
    
    new TypeIt("#Intro", {
        speed: 50,
        waitUntilVisible: true,
        afterComplete: function() {
            document.getElementById("Button").classList.add("visible");
        }
      })
        .type("<em>Programming Languages:</em>", { delay: 300 })
        .break({ delay: 500 })
        .type("Java: ★★★☆☆")
        .pause(300)
        .break({ delay: 500 })
        .type("C++: ★★★★☆")
        .pause(300)
        .break({ delay: 500 })
        .type("Python: ★★★★☆")
        .pause(300)
        .break({ delay: 500 })
        .type("JavaScript: ★★☆☆☆")
        .pause(300)
        .delete(1)
        .pause(500)
        .move(-3)
        .pause(500)
        .type("★")
        .move(null, { to: "END" })
        .break({ delay: 500 })
        .break({ delay: 500 })
        .type("<em>Technologies:</em> ")
        .break({ delay: 500 })
        .type("Keras: ★★★★☆")
        .break({ delay: 500 })
        .type("Tensorflow: ★★★☆☆")
        .break({ delay: 500 })
        .type("Tensorflow: ★★★☆☆")
        .break({ delay: 500 })
        .type("ROS2: ★★★★☆")
        .break({ delay: 500 })
        .type("Docker: ★★☆☆☆")
        .break({ delay: 500 })
        .break({ delay: 500 })
        .type("<em>Other Tools and OS:</em> ")
        .break({ delay: 500 })
        .type("Windows: ★★★★☆")
        .break({ delay: 500 })
        .type("Ubuntu: ★★★★☆")
        .break({ delay: 500 })
        .type("Git: ★★★★☆")
        .break({ delay: 500 })
        .break({ delay: 500 })
        .go();
    });
    document.getElementById("Button").addEventListener("click", function() {
         window.location.href = "home.html"; // Ersetze mit der Zielseite
    });