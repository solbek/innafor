let status;

// SEND DATA TO SERVER ============================
function sendData(endpoint, data) {
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    }).then(data => {
        status = data.status;
        return data.json();
    });
}

// GET DATA FROM SERVER ============================
function getData(endpoint, data) {
    return fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    }).then(data => {
        console.log(data);
    });
}

// LOGIN ==========================================
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
            output.innerHTML = json.mld;
            if (status == 200) {
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
