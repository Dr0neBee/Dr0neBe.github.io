document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const quizSection1 = document.getElementById("quiz-section1");
    const continueButton1 = document.getElementById("continue-button1");
    const quizSection2 = document.getElementById("quiz-section2");
    const continueButton2 = document.getElementById("continue-button2");
    const gifScreen = document.getElementById("gif-screen");
    const gifScreen2 = document.getElementById("gif-screen2");
    const footer1 = document.getElementById("footer1");
    const boxA = document.querySelector(".boxA");
    const box4 = document.querySelector(".box4");
    const endingresult = document.getElementById("ending-result");
    const quizSection3 = document.getElementById("quiz-section3");
    const boxZ = document.getElementById("boxZ");
    const boxX = document.querySelector(".boxX");
    const boxY = document.querySelector(".boxY");

    function showSection(section) {
        section.classList.remove("hidden");
        section.classList.add("show");
    }

    startButton.addEventListener("mouseover", () => {
        startButton.classList.add("animate-text");
    });

    startButton.addEventListener("mouseout", () => {
        startButton.classList.remove("animate-text");
    });

    startButton.addEventListener("click", () => {
        startButton.style.display = "none";
        showSection(quizSection1);
    });

    box4.addEventListener("click", () => {
        continueButton1.classList.remove("hidden");
        continueButton1.classList.add("animate-text");
        requestAnimationFrame(() => {
            continueButton1.classList.add("show");
        });
    });

    continueButton1.addEventListener("click", () => {
        footer1.textContent = "Whoosh!!!";
        footer1.classList.remove("hidden");
        footer1.classList.add("show");
        continueButton1.classList.add("hidden");

        gifScreen.classList.remove("hidden");
        gifScreen.classList.add("show");

        setTimeout(() => {
            gifScreen.classList.remove("show");
            gifScreen.classList.add("hidden");

            quizSection1.classList.remove("show");
            quizSection1.classList.add("hidden");

            showSection(quizSection2);
        }, 2000);
    });

    boxA.addEventListener("click", () => {
        continueButton2.classList.add("fade-in");
    });

    continueButton2.addEventListener("mouseover", () => {
        continueButton2.classList.add("animate-text");
    });

    continueButton2.addEventListener("mouseout", () => {
        continueButton2.classList.remove("animate-text");
    });

    continueButton2.addEventListener("click", () => {
        quizSection2.classList.remove("show");
        quizSection2.classList.add("hidden");

        continueButton2.classList.remove("fade-in");
        continueButton2.classList.add("hidden");

        showSection(quizSection3);
    });

    boxZ.addEventListener("click", () => {
        gifScreen2.classList.remove("hidden");
        gifScreen2.classList.add("show");

        setTimeout(() => {
            gifScreen2.classList.remove("hidden");
            gifScreen2.classList.add("show");

            boxX.style.display = "none";
            boxY.style.display = "none";
            boxZ.style.display = "none";

            endingresult.classList.remove("hidden");
            requestAnimationFrame(() => {
                endingresult.classList.add("show");
            });

            document.getElementById("ending-result").style.display = "block";
        }, 2000);
    });

    document.addEventListener("click", () => {
        document.getElementById("ending-result").style.display = "none";
        boxX.style.display = "block";
        boxY.style.display = "block";
        boxZ.style.display = "block";
    });
});