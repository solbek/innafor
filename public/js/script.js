// HJELPEFUNKSJONER =====================
function getId(id) {
    return document.getElementById(id);
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
// ====================================