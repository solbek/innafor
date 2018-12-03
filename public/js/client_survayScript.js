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







///TODO: Gi brukeren tibakemelding at skjemaet er sendt, og hvis de allerede har svart denne uka. Kanskje legge over et grått filter til å indikere at den ikke er tilgjenlig med en tidtaker som vil si ifra når man kan svare igjen.
async function sendSurvay() {

    let date = getTimeStamp(new Date());
    let timestamp = `W${date[0]}-M${date[1]}-Y${date[2]}`

    let data = {
        token: JSON.parse(localStorage.getItem("token")),
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