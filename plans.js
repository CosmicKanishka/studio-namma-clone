gsap.registerPlugin(ScrollTrigger, CustomEase);

CustomEase.create("custom", "M0,0 C0.819,0.077 0,1 1,1");
CustomEase.create("customElementAppear", "M0,0 C0.42,0 0.596,1.001 1,1");

const lenis = new Lenis({
    lerp: 0.05,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false
});
lenis.on('scroll', () => ScrollTrigger.update());
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const cursor = document.getElementById("customCursor");
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = "1";
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll("[data-cursor-hover]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
        cursor.innerHTML = el.getAttribute("data-cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
        cursor.innerHTML = "";
    });
});

const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("navMenuOverlay");
const pageMain = document.querySelector(".page-main");
let isMenuOpen = false;

menuToggle.addEventListener("click", () => {
    if (isMenuOpen) {
        gsap.to(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 1.2, ease: "power4.inOut" });
        gsap.to(pageMain, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power4.inOut" });
        menuToggle.querySelector(".link_first .text-mono").textContent = "Menu";
        menuOverlay.style.pointerEvents = "none";
        isMenuOpen = false;
    } else {
        menuOverlay.style.pointerEvents = "auto";
        gsap.to(pageMain, { rotation: 10, x: 300, y: 450, opacity: 0, scale: 1.5, duration: 1.4, ease: "power4.inOut" });
        gsap.to(".nav-menu_component", { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1, duration: 1.4, ease: "power4.inOut" });
        gsap.to(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)", duration: 1.4, ease: "power4.inOut" });
        menuToggle.querySelector(".link_first .text-mono").textContent = "Close";
        isMenuOpen = true;
    }
});

const modeSwitch = document.getElementById("modeSwitch");
modeSwitch.addEventListener("click", () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("is-dark");
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    const label = isDark ? "Light mode" : "Dark mode";
    modeSwitch.querySelector(".link_first .text-mono").textContent = label;
    modeSwitch.querySelector(".link_second .text-mono").textContent = label;
});


document.querySelectorAll(".cta_visual").forEach((el) => {
    gsap.fromTo(el, { width: "0rem" }, {
        width: "10rem",
        duration: 1.2,
        delay: 0.4,
        ease: "custom",
        scrollTrigger: { trigger: el, start: "top 95%", once: true }
    });
});

function initPacksWordsSticky() {
    const root = document.querySelector('#servicesContent');
    const words = root?.querySelector('.packs_words');
    const items = Array.from(root?.querySelectorAll('.packs_item'));
    if (!root || !words || !items.length) return;

    let lastIdx = -1;
    gsap.ticker.add(() => {
        const center = window.innerHeight * 0.4;
        items.forEach((el, i) => {
            const r = el.getBoundingClientRect();
            if (center >= r.top && center <= r.bottom) {
                if (lastIdx !== i) {
                    lastIdx = i;
                    gsap.to(words, { y: -20 * i, duration: 0.8, ease: "custom" });
                }
            }
        });
    });
}
initPacksWordsSticky();

gsap.fromTo("#stretchLogoInstance", {
    height: "0px"
}, {
    height: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".footer_logo_fill",
        start: "top bottom-=50px",
        end: "bottom bottom",
        scrub: 0.05
    }
});

const cities = [
    { name: "Paris, France", tz: "Europe/Paris" },
    { name: "Los Angeles, CA", tz: "America/Los_Angeles" },
    { name: "Hong Kong, China", tz: "Asia/Hong_Kong" }
];
let cityIdx = 0;

function updateCityTime() {
    const active = cities[cityIdx];
    const timeStr = new Intl.DateTimeFormat('fr-FR', {
        timeZone: active.tz,
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(new Date());

    document.getElementById("citySwitch1").textContent = active.name;
    document.getElementById("timeSwitch1").textContent = timeStr;
}
setInterval(updateCityTime, 1000);
setInterval(() => {
    cityIdx = (cityIdx + 1) % cities.length;
    updateCityTime();
}, 7000);
updateCityTime();
