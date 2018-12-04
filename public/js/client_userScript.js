// LOGIN ==========================================
async function login() {

    let data = {
        username: getId("loginUsername").value,
        password: getId("loginPassword").value
    };

    let res = await sendData("/innafor/users/login", data)
    if (res.status == 200) {
        res = await res.json();
        localStorage.setItem("token",res.token);
        window.location = 'mainPage.html';
    } else {
        res = await res.json();
        getId("loginOutput").innerHTML = res.feedback;
    }
};


// REGISTER ==========================================
///TODO: Skriv in passordet 2 ganger for å registrere
async function register() {


    let data = {
        brukernavn: getId("regUsername").value,
        passord: getId("regpassword").value,
        gruppe: getId("regGruppe").value
    };


    let res = await sendData("/innafor/users/register", data);
    if (res.status == 200) {
        res = await res.json();
        console.log(res);
        getId("regOutput").innerHTML = res.feedback;
        localStorage.setItem("token", res.token);


    } else {
        res = await res.json();
        getId("regOutput").innerHTML = res.feedback;
    }
};



async function verifyToken() {
    let res = await getData("/innafor/users/verifyToken");
    return res;
};


// USER SETTINGS ==========================================

async function changePassword(){
    
    let data = {
        oldPassword: getId("oldPassword").value,
        newPassword: getId("newPassword").value,
        newPasswordRep: get("newPasswordRep").value,
        token: localstorage.getItem("token")
    }    
}

// Logout ==========================================
async function logout(){
    
    localStorage.removeItem("token");
    window.location = "/";
    }
