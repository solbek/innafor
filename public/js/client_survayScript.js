function getTimeStamp(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

    let month = new Date().getMonth() + 1;

    return [weekNo, month, d.getUTCFullYear()]
}

async function sendSurvay() {
    let date = getTimeStamp(new Date());
    let timestamp = `W${date[0]}-M${date[1]}-Y${date[2]}`

    let data = {
        token: localStorage.getItem("token"),
        survayAnswers: survayQA,
        timestamp: timestamp
    };

    let res = await sendData("/innafor/survay/answersIn", data);

    if (res.status == 200) {
        res = await res.json();
        getId("survayOutput").innerHTML = res.feedback;

    } else {
        res = await res.json();
        getId("survayOutput").innerHTML = res.feedback;
    }
};

async function checkTimeStamp() {

    let date = getTimeStamp(new Date());
    let timestamp = `W${date[0]}-M${date[1]}-Y${date[2]}`

    let data = {
        token: localStorage.getItem("token"),
        timestamp: timestamp
    };

    let res = await sendData("/innafor/survay/checkTimeStamp", data);

    if (res.status !== 200) {
        res = await res.json();
        getId("survayOutput").innerHTML = res.feedback;
        document.querySelector(".survey-overlay").classList.add("active");

        document.querySelector(".survey-overlay-message").innerHTML = res.feedback;
        console.log(res.feedback);
        document.querySelector(".survey-title").innerHTML = "";
        document.querySelector(".survey-container").innerHTML = "";
        countdownAndRedirect(res);
    }
};

function countdownAndRedirect(res) {
    let text = document.querySelector(".survey-overlay-countdown");
    let progressbar = document.getElementById("progressBar");

    var timeleft = 5;
    var downloadTimer = setInterval(function () {
        text.innerHTML = `Du blir sendt til hovedsiden om ${timeleft} sekunder...`;
        progressbar.value = timeleft;
        
        timeleft--;
        if (timeleft == -1) {
            clearInterval(downloadTimer);
            window.location = 'mainPage.html';
        }
    }, 1000);
}

async function getReslutFromDb() {
    
    let response = await getData("/innafor/survay/resultOut", localStorage.getItem("token"));
    if(response.status == 200){
        let res = await response.json();
        for(let i=0; i < res.length; i++){
            datarows.push(res[i].results);
        }   
    }
    else{
        console.log("Bruker har ikke tilgang");
    }
}
