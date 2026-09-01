
let footer = document.createElement("footer");

footer.id = "footer";

footer.innerHTML = `
    <div class="footerTop">

        <div class="footerLeft">
            <p><a href="home.html">HOME</a></p>
            <p><a href="work.html">WORK</a></p>
            <p><a href="service.html">SERVICE</a></p>
            <p><a href="studio.html">STUDIO</a></p>
            <p><a href="plans.html">PLANS</a></p>
            <p><a href="approach.html">APPROACH</a></p>
            <p><a href="news.html">NEWS</a></p>

            <br>

            <p>YOUTUBE</p>
            <p>LINKEDIN</p>
            <p>INSTAGRAM</p>
            <p>LEGAL</p>
            <p>SITE EN FRANÇAIS</p>
        </div>

        <div class="footerRight">
            <p>We are a creative studio based in Paris, Barcelona & London.</p>
            <p>Big project? Crazy thought? Or just feel like chatting?</p>
            <p>LET'S TALK!</p>

            <p class="footerEmail">
                HELLO@STUDIONAMMA.COM
            </p>

            <p>
                COPYRIGHT 2025<br>
                STUDIO NAMMA
            </p>
        </div>

    </div>

    <div class="nammaContainer">
        <h1 class="nammaText">NAMMA</h1>
    </div>

    <div class="footerBottom">
        <p>WE CRAFT BOLD DESIGN & CLEAN WEBFLOW.</p>
        <p>LOS ANGELES, CA</p>
    </div>
`;

document.body.appendChild(footer);

let nammaText = footer.querySelector(".nammaText");

function animateNamma() {
    let nammaBox = nammaText.getBoundingClientRect();
    let screenHeight = window.innerHeight;

    if (nammaBox.top < screenHeight) {
        nammaText.classList.add("showNamma");
    }
    else{
        nammaText.classList.remove("showNamma");
    }
}

window.addEventListener("scroll", animateNamma);

animateNamma();

