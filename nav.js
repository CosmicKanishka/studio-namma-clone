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
  li1.append(a)
  a.innerText = "STUDIO NAMMA";
  a.setAttribute("href","home.html")

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
          cursor.style.left = `${event.clientX + 20}px`; //it will also work .
          cursor.style.top = `${event.clientY + 20}px`;
          videoCursor.style.display = "none";
          cursor.style.display = "block";
        }
      });
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
    });
  navbar.append(li1, li2, li3, li4);
  document.body.append(navbar)
  console.log(navbar);
