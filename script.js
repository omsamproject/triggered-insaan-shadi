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

gsap.to(".date_txt", {
    scrollTrigger: {
        trigger: ".date_txt",
        toggleActions: "restart none none none",
        start: "top 600px",
    },
    duration: 2,
    text: "WE ARE GETTING MARRIED",
});
gsap.to(".met_title", {
    scrollTrigger: {
        trigger: ".met_title",
        toggleActions: "restart none none none",
        start: "top 600px",
    },
    duration: 1.5,
    text: "HOW ME MET",
});
gsap.to(".met_desc", {
    scrollTrigger: {
        trigger: ".met_desc",
        toggleActions: "restart none none none",
        start: "top 400px",
    },
    duration: 3,
    text: "This was a typical match arranged by two families. For this beautiful couple, their arranged marriage turned into love with lots of effort; constantly and every day. And where there you want to make these efforts without complaints.\“In my case, I knew she was going to be my wife but for some reason, I was too nervous to even look at her and I knew she was too.\” After getting approvals from both families, they constantly talked over the phone and met each other to learn more about each other\’s personalities.\“I have to tell you, I am the lucky one here, she\’s pretty, she\’s honest and most importantly she makes me feel comfortable around her. I don\’t know if I would have found someone perfect like her myself, feeling super grateful to my parents."
});

gsap.to(".event_1,.event_3", {
    scrollTrigger: {
        trigger: ".event_1",
        toggleActions: "restart none none none",
        start: "top 800px",
    },
    duration: 1.5,
    x: 20,
    opacity: 1,
});

gsap.to(".event_2,.event_4", {
    scrollTrigger: {
        trigger: ".event_2",
        toggleActions: "restart none none none",
        start: "top 800px",
    },
    duration: 1.5,
    x: -20,
    opacity: 1,
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav_ul");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(35, 22, 25, 0.88)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});

gsap.to(".pic1,.pic5,.pic6", {
    scrollTrigger: {
        trigger: ".pic1",
        toggleActions: "restart none none none",
        start: "top 600px",
    },
    y: 10,
    opacity: 1,
    duration: 2,
});

gsap.to(".pic2,.pic3,.pic4", {
    scrollTrigger: {
        trigger: ".pic1",
        toggleActions: "restart none none none",
        start: "top 600px",
    },
    x: 10,
    opacity: 1,
    duration: 2,
});

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
