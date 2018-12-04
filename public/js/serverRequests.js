let url = 'https://innafor.herokuapp.com';

// (url+endpoint)


// SEND DATA TO SERVER ============================
function sendData(endpoint, data) {
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    }).then(data => {
        return data;
    });
}

// GET DATA FROM SERVER ============================
function getData(endpoint) {
    return fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-access-auth": localStorage.getItem("token")
        }     
    });
}


