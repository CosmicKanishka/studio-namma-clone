
let footer = document.createElement("footer");

footer.id = "footer";

footer.innerHTML = `
 
    <section class="contentBottom">
      <div class="content b">
        <h1>
          LET'S WORK <br /><img
            src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68dce0426bc778f79210aebb_CTA-Team_Namma.webp"
            alt="" style="width: 150px; margin-right: 10px; margin-top: 30px"
          />TOGETHER
        </h1>
      </div>
      <div class="content b" style="display: flex; flex-direction: column; gap: 50px;">
        <h5>
          Work with us if average isn’t your thing. <br />
          Drop it, we'll build it!
        </h5>
        <p>SAY HELLO -></p>
      </div>
    </section>

    <section class="footerVideo">
      <div class="videos"><video src="./media/WhatsApp Video 2026-09-01 at 16.18.58.mp4" autoplay muted loop playsinline width="15%" height="10%" ></video></div>
      <div class="videos"><video src="./media/WhatsApp Video 2026-09-01 at 16.18.59 (1).mp4" autoplay muted loop playsinline width="15%" height="10%" ></video></div>
      <div class="videos"><video src="./media/WhatsApp Video 2026-09-01 at 16.18.59 (2).mp4" autoplay muted loop playsinline width="15%" height="10%" ></video></div>
      <div class="videos"><video src="./media/WhatsApp Video 2026-09-01 at 16.18.59.mp4" autoplay muted loop playsinline width="15%" height="10%" ></video></div>
      <div class="videos"><video src="./media/WhatsApp Video 2026-09-01 at 16.19.00 (1).mp4" autoplay muted loop playsinline width="15%" height="10%" ></video></div>
      <div class="videos"><video src="./media/WhatsApp Video 2026-09-01 at 16.19.00.mp4" autoplay muted loop playsinline width="15%" height="10%" ></video></div>
    </section>
    <br>
    <br>
    <br>
    <br>
    <br>


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

