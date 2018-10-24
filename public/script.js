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
                window.location = json.forside;
            } else {
                console.log("ops");
            }
        })
        .catch(error => {
            output.innerHTML = error;
            console.log(error);
        });



}
