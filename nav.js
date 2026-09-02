let navbar = document.createElement("ul");
  navbar.setAttribute("id", "navbar")

  let menu = document.createElement("ul");
  menu.setAttribute("id", "menu")

  function createListElement(value , link) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href",link)
    a.innerText = value;
    li.append(a);
    menu.append(li);

    document.body.append(menu)
  }

createListElement("HOME", "home.html");
createListElement("WORK", "work.html");
createListElement("STUDIO", "studio.html");
createListElement("SERVICES", "service.html");
createListElement("PLANS", "plans.html");
createListElement("APPROACH", "approach.html");
createListElement("NEWS", "news.html");



  let li1 = document.createElement("li");
  let a = document.createElement("a")
  a.setAttribute("href","home.html")
  a.innerText = "STUDIO NAMMA";
  li1.append(a)

  let li2 = document.createElement("li");
  li2.innerText = "DARK MODE";

  let li3 = document.createElement("li");
  li3.innerText = "MENU";

  let li4 = document.createElement("li");
  li4.innerText = "LET'S TALK!"

  function mouseEffect(element) {
    element.addEventListener("mouseenter", () => {
      if (element.innerText == "MENU") {
        element.innerText = "OPEN"
      }
      else if (element.innerText == "LET'S TALK!") {
        element.innerText = "CONTACT US"
      }
    })

    element.addEventListener("mouseout", () => {
      if (element.innerText == "OPEN") {
        element.innerText = "MENU"
      }
      else if (element.innerText == "CONTACT US") {
        element.innerText = "LET'S TALK!"
      }
    })
  }

  mouseEffect(li3);
  mouseEffect(li4)

  li3.addEventListener("click", ()=>{
    if(li3.innerText == "OPEN"){
      menu.classList.add("show")
      li3.innerText = "CLOSE"
    }
    else{
      menu.classList.remove("show")
      li3.innerText = "OPEN"
    }
  })

  



let contactPage = document.createElement("div");
contactPage.setAttribute("id", "contactPage");


contactPage.innerHTML = `
    <div class="contactTop">
        <h1>LET'S WORK<br>TOGETHER</h1>

        <button id="closeContact">×</button>
    </div>

    <div class="contactForm">

        <div class="formRow">
            <label>NAME</label>
            <input type="text" placeholder="YOUR NAME" id="contactName">
        </div>

        <div class="formRow">
            <label>EMAIL</label>
            <input type="email" placeholder="YOUR EMAIL" id="contactEmail" id="contactPhone">
        </div>

        <div class="formRow">
            <label>PHONE</label>
            <input type="text" placeholder="YOUR PHONE">
        </div>

        <div class="formRow">
            <label>INTEREST</label>

            <div class="interestButtons">
                <button>DESIGN</button>
                <button>WEBFLOW DEVELOPMENT</button>
                <button>FULL PACKAGE</button>
            </div>
        </div>

        <div class="formRow">
            <label>MESSAGE</label>

            <textarea placeholder="GIVE US A SHORT PROJECT BRIEF, DEADLINE, BUDGET, ETC." id="contactMessage"></textarea>
        </div>

    </div>

    <div class="contactBottom">

        <p>BY CLICKING ON "SEND", YOU ACCEPT OUR POLICY.</p>

        <button id="sendButton">SEND</button>

    </div>
`;


document.body.append(contactPage);

// Select interest buttons
let interestButtons = contactPage.querySelectorAll(".interestButtons button");

interestButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        interestButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });

        // Add active class to clicked button
        button.classList.add("selected");

    });

});

li4.addEventListener("click", () => {

    contactPage.classList.add("showContact");

});


// Close contact page
document.getElementById("closeContact").addEventListener("click", () => {

    contactPage.classList.remove("showContact");

});

let sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", () => {

    alert("SEND button clicked!");

});

  navbar.append(li1, li2, li3, li4);
  document.body.append(navbar)
  console.log(navbar);