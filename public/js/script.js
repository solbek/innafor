// HJELPEFUNKSJONER =====================
function getId(id) {
    return document.getElementById(id);
}

function getClass(cl) {
    return document.getElementsByClassName(cl);
}

/*
// LOGIN ==============================
let loggedIn = false;//localStorage.getItem('token');

///TODO: SJEKKE OM TOKEN ER GYLDIG. HVIS GYLDIG, TIL MENY. HVIS IKKE, VIS LOGIN.
if (loggedIn) {
    
        window.location = 'mainPage.html';
} else {}

// ====================================

*/

// DISPLAYKONTROLL ====================

function displayFormPage() {
    window.location = 'survey.html';
}

function displayResultPage() {
    window.location = 'chart.html';
}


function displayProfile() {
    window.location = 'profil.html';
}

function displayContactPage() {
    window.location = "contact.html";
}

