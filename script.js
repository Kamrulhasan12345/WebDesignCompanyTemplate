const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["stunning view" , "responsive features","cross platform support","no hidden costs", "no hassles"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//menuscript start
      var menuBtn = document.getElementById("menuBtn");
      var closeBtn = document.getElementById("closeBtn");
      var sideNav = document.getElementById("sideNav");
      
      sideNav.style.right = "-250px";
      closeBtn.style.right = "-250px";
      menuBtn.onclick = function (){
        if (sideNav.style.right =="-250px"){
           sideNav.style.right = "0";
           closeBtn.style.right = "1px"
           menuBtn.style.opacity = "0";
        }
        else {
           sideNav.style.right = "-250px";
           closeBtn.style.right = "-250px"
           menuBtn.style.opacity = "1";
        }
      };
      closeBtn.onclick = function (){
        if (sideNav.style.right =="0px"){
           sideNav.style.right = "-250px";
           closeBtn.style.right = "-250px"
           menuBtn.style.opacity = "1";
        }
        else {
           sideNav.style.right = "0px";
           closeBtn.style.right = "1px"
           menuBtn.style.opacity = "0";
        }
      };
      
//menuscript end

/*btn redirect start no need
function redirectToURL(btnId){
				if(btnId=="button1")
					window.location.replace("https://en.wikipedia.org/wiki/Main_Page");
				else if(btnId=="button2")
					window.location.replace("https://www.google.com");
				else if(btnId=="button3")
					window.location.replace("http://www.bing.com/");
			}
//end*/

//popup get a quote start

   