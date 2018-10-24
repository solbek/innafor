function sendData(endpoint, data) {
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    }).then(data => {
        return data.json();
    });
}



//Sender inn logginn info for å teste på serveren
function loggInn() {

    let loggInnUsername = document.getElementById("logInnUsername");
    let loggInnpassword = document.getElementById("loggInnpassword");
    let output = document.getElementById("output");

    let data = {
        username: loggInnUsername.value,
        password: loggInnpassword.value
    };

    sendData("/innafor/users/login", data)
        .then(json => {
            console.log(json);
            output.style.color = "white";
            output.innerHTML = json.mld;
            if (json.status == 200) {
                console.log("yay");
                displayMainPage();
                //window.location = json.forside; // Denne linjen bytter html-fil.
            } else {
                console.log("ops");
            }
        })
        .catch(error => {
            output.innerHTML = error;
            console.log(error);
        });
}




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
    document.getElementById("container").appendChild(element);
}

function clearScreen() {
    document.getElementById("container").innerHTML = "";
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

    /// Sjekke om vi må legge inn login koder her.
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