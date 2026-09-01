
let texts = document.querySelectorAll(".animate");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

texts.forEach((text) => {
    observer.observe(text);
});

let observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

let images = document.querySelectorAll(".slideImage > div");

images.forEach((img) => {
    observer2.observe(img);
});

let list = document.querySelectorAll(".art > h1");

list.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {

        list.forEach((text) => {

            if (text.innerText == event.target.innerText) {
                text.style.color = "black";
            } else {
                text.style.color = "gray";
            }

        });

    });
});

let cursor = document.getElementById("cursor");
let videoCursor = document.getElementById("videoCursor");

let contents = document.querySelectorAll(".content");

contents.forEach((content, index) => {

    content.addEventListener("mousemove", (event) => {

        if (index == 0) {

            videoCursor.style.left = event.clientX + 20 + "px";
            videoCursor.style.top = event.clientY + 20 + "px";
            videoCursor.style.display = "block";
            cursor.style.display = "none";

        } else {

            cursor.style.left = event.clientX + 20 + "px";
            cursor.style.top = event.clientY + 20 + "px";
            videoCursor.style.display = "none";
            cursor.style.display = "block";

        }

    });

});

