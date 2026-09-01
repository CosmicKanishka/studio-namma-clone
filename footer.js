let footer = document.createElement("footer");

footer.id = "footer";

footer.innerHTML = `
    <div class="footerTop">

        <div class="footerLeft">
            <p>NEWS</p>
            <p>STUDIO NAMMA</p>

            <br>

            <p>YOUTUBE</p>
            <p>LINKEDIN</p>
            <p>INSTAGRAM</p>
            <p>LEGAL</p>
            <p>SITE EN FRANÇAIS</p>
        </div>

        <div class="footerCenter">
            <p>LET'S TALK!</p>

            <p class="footerEmail">
                HELLO@STUDIONAMMA.COM
            </p>

            <p>
                COPYRIGHT 2025<br>
                STUDIO NAMMA
            </p>
        </div>

        <div class="footerRight">
            <p>MENU</p>
            <p>LET'S TALK!</p>
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

document.body.append(footer);

let nammaText = footer.querySelector(".nammaText");

function animateNamma() {
    let nammaPosition = nammaText.getBoundingClientRect().top;

    let screenHeight = window.innerHeight;

    if (nammaPosition < screenHeight) {
        nammaText.classList.add("showNamma");
    } else {
        nammaText.classList.remove("showNamma");
    }
}

window.addEventListener("scroll", animateNamma);

animateNamma();