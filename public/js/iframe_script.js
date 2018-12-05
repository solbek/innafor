let iframeOverlay = document.getElementById('iframe-overlay');
let iframe = document.getElementById("iframe");
let closeIcon = document.getElementsByClassName("close")[0];
let btnJerv = document.getElementById("jerv-btn");
let btnSOM = document.getElementById("snakkommobbing-btn");



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
    iframe.alt = "Websiden til FK Jerv";
    iframeOverlay.style.display = "block";
}

function displaySOMIframe(){
    iframe.src = "http://www.snakkommobbing.no/";
    iframe.alt = "Websiden til snakk om mobbing";
    iframeOverlay.style.display = "block";
}


