// DISPLAYKONTROLL -------------------------------------------------

// LOGIN USIKKER
let loggedIn = true;
// -------

if (loggedIn){
    displayMainPage();
}else {
    displayLogin();
}

/*
(function () {
        if (! authenticatedUser) {
            displayLoginForm();
        } else{
            displaySubmitRequestForm();
        }
    })();
*/

function addElement(element) {
    document.getElementById("templateContainer").appendChild(element);
}

function clearScreen() {
    document.getElementById("templateContainer").innerHTML = "";
}

function createElementFromTemplate(templateID) {
    let template = document.querySelector(templateID);
    let clone = document.importNode(template.content, true);
    return clone;
}

function displayLogin() {
    clearScreen();
    let login = createElementFromTemplate("#login")
    addElement(login);
}

function displayMainPage() {
    clearScreen();
    let mainPage = createElementFromTemplate("#mainPage")
    addElement(mainPage);
}

function displayNavbar() {
    let navbar = createElementFromTemplate("#navbar")
    addElement(navbar);
}

function displayFormPage(){
    clearScreen();
    let formPage = createElementFromTemplate("#formPage")
    addElement(formPage);
}

function displayContactPage() {
    clearScreen();
    let contactPage = createElementFromTemplate("#contactPage")
    addElement(contactPage);
}

function displayProfile() {
    clearScreen();
    let jervProfile = createElementFromTemplate("#profile")
    addElement(jervProfile);
}

// DISPLAYKONTROLL IFRAME -----------------------------

let iframeOverlay = document.getElementById('iframe-overlay');
let iframe = document.getElementById("iframe");
let closeIcon = document.getElementsByClassName("close")[0];
let btnJerv = document.getElementById("jerv-btn");
let btnSOM = document.getElementById("snakkommobbing-btn");

btnJerv.onclick = displayJervIframe;
btnSOM.onclick = displaySOMIframe;

closeIcon.onclick = function () {
    iframeOverlay.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == iframeOverlay) {
        iframeOverlay.style.display = "none";
    }
}

function displayJervIframe() {
    iframe.src = "http://www.fkjerv.no/";
    iframeOverlay.style.display = "block";
}

function displaySOMIframe(){
    iframe.src = "http://www.snakkommobbing.no/";
    iframeOverlay.style.display = "block";
}


