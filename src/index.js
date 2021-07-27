//get element from html
const TerminalContainer = document.getElementById("TerminalContainer");
const FirstLine = document.getElementById("FirstLine");
const SecondLine = document.getElementById("SecondLine");
SecondLine.classList.add("SecondLine");
FirstLine.classList.add("FirstLine");

//add p tag to TerminalContainer
const username = document.createElement("span");
username.innerHTML = "[JohnDoe";
const computerName = document.createElement("span");
computerName.innerHTML = "@archlinux:]$";
const neofetch = document.createElement("span");
neofetch.innerHTML = "  neofetch";

//second line
const username2 = document.createElement("span");
username2.innerHTML = "[JohnDoe";
const computerName2 = document.createElement("span");
computerName2.innerHTML = "@archlinux:]$";
const ls2 = document.createElement("span");
ls2.innerHTML = " ls";

const documents2 = document.createElement("pre");
documents2.innerHTML = "Desktop    Downloads  Pictures  Templates  snap";
const secondDocuments2 = document.createElement("pre");
secondDocuments2.innerHTML = "Documents  Music      Public    Videos     snapd";
documents2.classList.add("documents2");
secondDocuments2.classList.add("documents2");


//append p tag to TerminalContainer
FirstLine.appendChild(username);
FirstLine.appendChild(computerName);
FirstLine.appendChild(neofetch);

SecondLine.appendChild(username2);
SecondLine.appendChild(computerName2);
SecondLine.appendChild(ls2);
SecondLine.appendChild(documents2);
SecondLine.appendChild(secondDocuments2);
