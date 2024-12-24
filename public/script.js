gsap.to(".img", {
    scrollTrigger: {
        trigger: ".img",
        toggleActions: "restart none none none",
        start: "top 600px",
    },
    duration: 1.5,
    y: 70,
    opacity: 1,
    scale: 1,
});


gsap.to(".met_title", {
    scrollTrigger: {
        trigger: ".met_title",
        toggleActions: "restart none none none",
        start: "top 600px",
    },
    duration: 1.5,
    text: "HOW THEY MET",
});
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav_ul");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(35, 22, 25, 0.88)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});
gsap.to(".upper", {
    opacity: 1,
    duration: 1,
    scale: 1,
})

document.querySelector(".phone_view").addEventListener("click", () => {
    const phoneUl = document.querySelector(".phone_ul");
    const items = document.querySelectorAll(".phone_popup");

    items.forEach((item) => {
        item.style.display =
            item.style.display === "none" || item.style.display === ""
                ? "block"
                : "none";

    });
    if (phoneUl.classList.contains("visible")) {
        document.querySelector('.phone_view').innerHTML = "<svg class=\"lines_svg \" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"40\" height=\"40\" color=\"#fff\" fill=\"none\">" +
            "<path d=\"M4 5L20 5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />" +
            "<path d=\"M4 12L20 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />" +
            "<path d=\"M4 19L20 19\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />" +
            "</svg>";
        phoneUl.classList.remove("visible");
        setTimeout(() => {
            phoneUl.classList.remove("show");
            phoneUl.style.display = "none";
        }, 500);
    } else {
        document.querySelector('.phone_view').innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lines_svg invert\"viewBox=\"0 0 24 24\" width=\"40\" height=\"40\" color=\"#000000\" fill=\"none\">" +
            "<path d=\"M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />" +
            "</svg>";
        phoneUl.style.display = "flex";
        phoneUl.classList.add("show");
        setTimeout(() => {
            phoneUl.classList.add("visible");
        }, 10);
    }
});

var items = document.querySelectorAll(".phone_popup");
items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((item) => {
            item.style.display = "none";
        });
        document.querySelector('.phone_view').innerHTML = "<svg class=\"lines_svg \" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"40\" height=\"40\" color=\"#fff\" fill=\"none\">" +
            "<path d=\"M4 5L20 5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />" +
            "<path d=\"M4 12L20 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />" +
            "<path d=\"M4 19L20 19\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />" +
            "</svg>";
        const phoneUl = document.querySelector(".phone_ul");
        phoneUl.classList.remove("visible");
        setTimeout(() => {
            phoneUl.classList.remove("show");
            phoneUl.style.display = "none";
        }, 500);
    });
});
window.onload = () => {
    const duration = 4000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = Math.max(20, 40 * (timeLeft / duration));

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}
async function updateNumber() {
    try {
        const response = await fetch('/greet', {
            method: 'POST'
        });
        const result = await response.json();
        if (result.success) {
            if (result.redirect) {
                window.location.href = result.redirect
            }
        } else {
            console.log("Update Failed: " + result.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}