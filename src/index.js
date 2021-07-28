import { Colors } from "./Colors.js";

const randomForeground = Math.floor(Math.random() * 546);
const randomBackground = Math.floor(Math.random() * 546);
const randomFolder = Math.floor(Math.random() * 546);
const randomNeofetchColor = Math.floor(Math.random() * 546);

// character color
const foreground = Colors[randomForeground];
//background
const background = Colors[randomBackground];
// color5
const folder = Colors[randomFolder];
// neofetch icon
const neofetchColor = Colors[randomNeofetchColor];

const TerminalContainer = document.getElementById("TerminalContainer");
const FirstLine = document.getElementById("FirstLine");
const SecondLine = document.getElementById("SecondLine");
const ArchIcon = document.getElementById("archIcon");
const specsTitle = document.getElementsByClassName("specTitle")
for (var i = 0, max = specsTitle.length; i < max; i++) {
    specsTitle[i].style.color = neofetchColor;
}
const specNames = document.getElementsByClassName("specNames")
for (var i = 0, max = specNames.length; i < max; i++) {
    specNames[i].style.color = foreground;
}
TerminalContainer.style.background = background;
SecondLine.classList.add("SecondLine");
FirstLine.classList.add("FirstLine");
ArchIcon.style.color = neofetchColor;


//add p tag to TerminalContainer
const username = document.createElement("span");
username.innerHTML = "[JohnDoe@archlinux:]$";
username.style.color = foreground;
const neofetch = document.createElement("span");
neofetch.innerHTML = "  neofetch";
neofetch.style.color = foreground;

//second line
const username2 = document.createElement("span");
username2.innerHTML = "[JohnDoe@archlinux:]$";
username2.style.color = foreground;
const ls2 = document.createElement("span");
ls2.innerHTML = " ls";
ls2.style.color = foreground;

const documents2 = document.createElement("pre");
documents2.innerHTML = "Desktop    Downloads  Pictures  Templates  snap";
const secondDocuments2 = document.createElement("pre");
secondDocuments2.innerHTML = "Documents  Music      Public    Videos     snapd";
documents2.classList.add("documents2");
documents2.style.color = folder;
secondDocuments2.classList.add("documents2");
secondDocuments2.style.color = folder;

//append p tag to TerminalContainer
FirstLine.appendChild(username);
FirstLine.appendChild(neofetch);

SecondLine.appendChild(username2);
SecondLine.appendChild(ls2);
SecondLine.appendChild(documents2);
SecondLine.appendChild(secondDocuments2);
