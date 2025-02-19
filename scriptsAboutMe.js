document.addEventListener("DOMContentLoaded", function () {
    
    new TypeIt("#Intro", {
        speed: 50,
        waitUntilVisible: true,
        afterComplete: function() {
            document.getElementById("Button").classList.add("visible");
        }
      })
        .type("Nklas", { delay: 300 })
        .move(-4)
        .type("i")
        .move(null, { to: "END" })
        .type(" Stockfisch: Software developer")
        .break({ delay: 500 })
        .break({ delay: 500 })
        .pause(300)
        .break({ delay: 500 })
        .type("<em>Degrees:</em> ")
        .move(null, { to: "END" })
        .break({ delay: 500 })
        .type("• 2019-2022: Bachelor of Science: computer science")
        .break({ delay: 500 })
        .type("• since 2022: Master student in computer science")
        .break({ delay: 500 })
        .break({ delay: 500 })
        .type("<em>Interests:</em> ")
        .break({ delay: 500 })
        .type("• Simulations")
        .break({ delay: 500 })
        .type("• Machine learning")
        .break({ delay: 500 })
        .type("• Learning new things")
        .pause(300)
        .delete(6)
        .type("funny things")
        .break({ delay: 500 })
        .go();
    });
    document.getElementById("Button").addEventListener("click", function() {
         window.location.href = "home.html"; // Ersetze mit der Zielseite
    });