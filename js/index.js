const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

document.title = "Great idea!";
// There didn't seem to be a need to create a variable for this, so I just coded it directly.

const a = document.querySelectorAll("header nav a")
a[0].textContent = siteContent["nav"]["nav-item-1"];
a[1].textContent = siteContent["nav"]["nav-item-2"];
a[2].textContent = siteContent["nav"]["nav-item-3"];
a[3].textContent = siteContent["nav"]["nav-item-4"];
a[4].textContent = siteContent["nav"]["nav-item-5"];
a[5].textContent = siteContent["nav"]["nav-item-6"];
// I used querySelectorAll to grab all of the nav items and used "header nav a" just in case later on we needed to add a footer nav that was different.

// I grabbed each of the links individually. If there is an easier way, that would be nice to know, but this worked fine.

a.forEach(element => element.style.color ="green");
// I used a for each loops to iterate through the links and change the color of each one to green.

const nav = document.querySelector("nav");
// I created a variable for the nav because I wasn't sure how else to add children to it.

const more = document.createElement("a");
more.textContent = "More";
nav.appendChild(more);
more.style.color = "green";
// I used createElement to create a new link. I used textContent to add the text. I used appendChild to add the link to the end of the nav. I used .style.color to change the color to green since it wasn't part of the forEach I used earlier.

const hello = document.createElement("a");
hello.textContent = "Hello"
nav.prepend(hello);
hello.style.color = "green";

const h1 = document.querySelector(".cta-text h1");
h1.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");
// I used querySelector to grab the h1 and make it a variable. I used innerHTMl because that was the only way I could get the .join to work correctly. Both textContent and innerText just added <br> to the h1 instead of actually creating breaks. I wasn't sure how to add the breaks in the h1 and got help from another student. After they explained it, I looked up .join myself because I had never used it before. I get it now, but it feels like there's a better way to do this.

const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];
// I used querySelector to grab the button and turn it into a variable; then, I used textContent to add the text to the button.

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
// I used getElementById because the images all have ids; then, I used setAttribute to add the src for the image.

const h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];
// I put all the h4's together because it seems like if you were to change the style of one, you would change the style of all of them. I'm wondering if I should have put the contact h4 in its own variable, but it seems like an easier fix a developer could do if they had to later on.

const text = document.querySelectorAll(".main-content p");
text[0].textContent = siteContent["main-content"]["features-content"];
text[1].textContent = siteContent["main-content"]["about-content"];
text[2].textContent = siteContent["main-content"]["services-content"];
text[3].textContent = siteContent["main-content"]["product-content"];
text[4].textContent = siteContent["main-content"]["features-content"];
// Once again, I accessed each item individually. I wonder if I could use a loop for this and make it also look through the main-content in the JSON object to get me what I need. I don't think I can since it also has the h4 information inbetween the content information.

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

const footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];

// STRETCH
nav.style.borderBottom = "solid 2.5px black";
h4[0].style.color = "red";
h4[1].style.color = "orange";
h4[2].style.color = "yellow";
h4[3].style.color = "green";
h4[4].style.color = "blue";
h4[5].style.color = "purple";

h4.forEach(item => {
  item.style.backgroundColor = "lightgrey";
  item.style.fontSize = "22.5px";
});

const container = document.querySelector("body");

button.addEventListener("click", event => {
  container.style.backgroundColor = "darkgray";
  event.target.style.backgroundColor = "darkgray";
  h4.forEach(item => {
    item.style.backgroundColor = "darkgrey";
  });
  a.forEach(element => element.style.color ="black");
  more.style.color = "white";
  hello.style.color = "white";
});