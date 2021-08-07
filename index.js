import { Colors } from "./Colors.js"

function randomColor() {
  const randomForeground = Math.floor(Math.random() * 546);
  const randomBackground = Math.floor(Math.random() * 546);
  const randomFolder = Math.floor(Math.random() * 546);
  const randomNeofetch = Math.floor(Math.random() * 546);

  return {
    foreground: Colors[randomForeground],
    background: Colors[randomBackground],
    folder: Colors[randomFolder],
    neofetch: Colors[randomNeofetch],
  };
}
let colors = randomColor();

const TerminalContainer = document.getElementById("TerminalContainer");
const username = document.getElementById("username");
const neofetch = document.getElementById("neofetch");
const ArchIcon = document.getElementById("archIcon");
const specTitle = document.getElementsByClassName("specTitle");
const username2 = document.getElementById("username2");
const atCharacter = document.getElementById("@");
const line = document.getElementById("line");
const ls2 = document.getElementById("ls2");
const documents2 = document.getElementById("documents2");
const secondDocuments2 = document.getElementById("secondDocuments2");
const button = document.getElementById("button");
const foregroundTable = document.getElementById("foregroundTable");
const backgroundTable = document.getElementById("backgroundTable");
const neofetchTable = document.getElementById("neofetchTable");
const folderTable = document.getElementById("folderTable");
const foregroundTitle = document.getElementById("foregroundTitle");
const backgroundTitle = document.getElementById("backgroundTitle");
const neofetchTitle = document.getElementById("neofetchTitle");
const folderTitle = document.getElementById("folderTitle");


for (var i = 0, max = specTitle.length; i < max; i++) {
  specTitle[i].style.color = colors.neofetch;
}
const specNames = document.getElementsByClassName("specNames");
for (var i = 0, max = specNames.length; i < max; i++) {
  specNames[i].style.color = colors.foreground;
}

function getColors() {
  colors = randomColor();
  TerminalContainer.style.background = colors.background;
  ArchIcon.style.color = colors.neofetch;
  username.style.color = colors.foreground;
  neofetch.style.color = colors.foreground;
  atCharacter.style.color = colors.foreground;
  line.style.color = colors.foreground;
  username2.style.color = colors.foreground;
  ls2.style.color = colors.foreground;
  documents2.style.color = colors.folder;
  secondDocuments2.style.color = colors.folder;
  for (var i = 0, max = specTitle.length; i < max; i++) {
    specTitle[i].style.color = colors.neofetch;
  }
  for (var i = 0, max = specNames.length; i < max; i++) {
    specNames[i].style.color = colors.foreground;
  }
  foregroundTitle.style.backgroundColor = colors.foreground;
  foregroundTable.innerHTML = colors.foreground;
  foregroundTable.style.backgroundColor = colors.foreground;

  backgroundTitle.style.backgroundColor = colors.background
  backgroundTable.innerHTML = colors.background;
  backgroundTable.style.backgroundColor = colors.background;

  neofetchTitle.style.backgroundColor = colors.neofetch;
  neofetchTable.innerHTML = colors.neofetch;
  neofetchTable.style.backgroundColor = colors.neofetch;

  folderTitle.style.backgroundColor = colors.folder;
  folderTable.innerHTML = colors.folder;
  folderTable.style.backgroundColor = colors.folder;
}
getColors();
button.addEventListener("click", getColors);
