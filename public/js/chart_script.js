
// HVA VI FÅR FRA SERVEREN =======================
let datarows = [];

console.log(datarows);


// ARRAYS ========================================
let answers = []; // [[spiller1 svar1, spiller1 svar2],[spiller2 svar1, spiller2 svar2] ...]
let questions = []; // [Spørsmål1, spørsmål2 ...]
let averageAnswers = []; // [snitt av svar på spm1, snitt av svar på spm2 ...]
let tags = []; // [Trivsel, Treningsinnhold ...]
let averageAnswersByTags = []; // [Snitt av alle avgAnsw med trivseltag, Snitt av alle avgAnsw med treningsinnholdtag,]
let sortedAnswers = []; // Om array[0][0] = 3 betyr det at 3 besvarte spørsmål 1 med 1.


// FUNCTIONS =====================================
function makeAnswersArray() {
    for (let i = 0; i < datarows.length; i++) {
        let enBesvarelse = datarows[i].besvarelse;
        answers.push([]);
        for (let j = 0; j < enBesvarelse.length; j++) {
            answers[i].push(enBesvarelse[j].answer);
        }
    }
}

function makeQuestionsArray() {
    let enBesvarelse = datarows[0].besvarelse;
    for (let j = 0; j < enBesvarelse.length; j++) {
        questions.push(enBesvarelse[j].question);
    }
}

function makeTagsArray() {
    let enBesvarelse = datarows[0].besvarelse;
    for (let j = 0; j < enBesvarelse.length; j++) {
        if (!tags.includes(enBesvarelse[j].tag)) {
            tags.push(enBesvarelse[j].tag);
        }
    }
}

function sortAnswers() {
    for (let k = 0; k < datarows[0].besvarelse.length; k++) {
        sortedAnswers.push([0, 0, 0, 0, 0]);
    }

    ///TODO: Sjekk array.filter
    for (let i = 0; i < answers.length; i++) {
        let enBesvarelse = datarows[i].besvarelse;


        for (let j = 0; j < enBesvarelse.length; j++) {
            let answer = enBesvarelse[j].answer;
            if (answer == 1) {
                sortedAnswers[j][0] += 1;
            } else if (answer == 2) {
                sortedAnswers[j][1] += 1;
            } else if (answer == 3) {
                sortedAnswers[j][2] += 1;
            } else if (answer == 4) {
                sortedAnswers[j][3] += 1;
            } else if (answer == 5) {
                sortedAnswers[j][4] += 1;
            }
        }
    }
}

function makeAverageAnswersArray() {
    let utgangspunkt = [];
    for (let k = 0; k < answers[0].length; k++) {
        utgangspunkt.push([]);
        for (let j = 0; j < answers.length; j++) {
            utgangspunkt[k].push(answers[j][k]);
        }
    }
    for (let i = 0; i < utgangspunkt.length; i++) {
        averageAnswers.push(findAverage(utgangspunkt[i]));
    }
}

function makeAverageAnswersTagsArray() {
    let utgangspunkt = [];
    for (let k = 0; k < answers[0].length; k++) {
        utgangspunkt.push([]);
        for (let j = 0; j < answers.length; j++) {
            utgangspunkt[k].push(answers[j][k]);
        }
    }
    for (let i = 0; i < utgangspunkt.length; i++) {
        averageAnswers.push(findAverage(utgangspunkt[i]));
    }
}

function makeAvarageAnswersTagsArray() {
    for (let i = 0; i < tags.length; i++) {
        let utgangspunkt = [];
        for (let j = 0; j < averageAnswers.length; j++) {
            let tag = datarows[0].besvarelse[j].tag;
            if (tag == tags[i]) {
                utgangspunkt.push(averageAnswers[j]);
            }
        }
        averageAnswersByTags.push(findAverage(utgangspunkt));
    }
}

function findAverage(arguments) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += parseInt(arguments[i]);
    }
    return (total / (arguments.length));
}


// BAR COLORS -------------------------
let backgroundColors = [
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153,102, 255, 0.8)'];

Chart.defaults.global.defaultFontColor = '#ffffff';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.maintainAspectRatio = false;

// FUNCTIONS =========================

function makeMonthlyChart() {
    let container = document.querySelector(".chart-container");
    container.innerHTML = "";
    let myCanvas = document.createElement("canvas");
    container.appendChild(myCanvas);
    let ctx = myCanvas.getContext('2d');


    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: tags,
            datasets: [{
                data: averageAnswersByTags,
                backgroundColor: backgroundColors
        }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 5,
                        min: 0,
                        stepSize: 1,
                        fontSize: 16,
                        fontStyle: 'bold'
                    },
                    gridLines: {
                        display: false,
                        color: 'rgba(255,255,255,1)'
                    },
            }],
                xAxes: [{
                    ticks: {
                        fontSize: 16,
                        fontStyle: 'bold'
                    },
                    gridLines: {
                        display: false,
                        color: 'rgb(255,255,255)'
                    }
            }]
            }
        }
    });
}

function makeProgressChart() {
    let container = document.querySelector(".chart-container");
    container.innerHTML = "";
    let myCanvas = document.createElement("canvas");
    container.appendChild(myCanvas);
    let ctx = myCanvas.getContext('2d');

    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Desember", "Januar", "Februar"],
            datasets: [{
                    label: tags[0],
                    data: [averageAnswersByTags[0], 5, 4],
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: backgroundColors[0],
                    borderWidth: 5
            },
                {
                    label: tags[1],
                    data: [averageAnswersByTags[1], 2, 3],
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: backgroundColors[1],
                    borderWidth: 5
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 5,
                        min: 0,
                        stepSize: 1,
                        fontSize: 16,
                        fontStyle: 'bold'
                    },
                    gridLines: {
                        display: false,
                        color: 'rgba(255,255,255,1)'
                    },
            }],
                xAxes: [{
                    ticks: {
                        fontSize: 12,
                        fontStyle: 'bold'
                    },
                    gridLines: {
                        display: false,
                        color: 'rgb(255,255,255)'
                    }
            }]
            }
        }
    });

}

function makeQuestionChart() {
    let container = document.querySelector(".chart-container");
    container.innerHTML = "";
    let div = document.createElement("div");
    for (let i = 0; i < questions.length; i++) {
        let html = "";
        html += `<div class="horizontal-chart-container">`;
        html += `<div class="horizontal-chart-wrapper">`;
        html += `<canvas id="canvas${i}" class="horizontal-chart"></canvas>`;
        html += `</div>`;
        html += `</div>`;

        div.innerHTML += html;
    }
    container.appendChild(div);
    for (let i = 0; i < questions.length; i++) {
        console.log("Lager canvas " + i);
        let myCtx = document.getElementById(`canvas${i}`).getContext('2d');

        let myChart = new Chart(myCtx, {
            type: 'horizontalBar',
            data: {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [{
                    label: 'Besvarelser',
                    data: sortedAnswers[i],
                    backgroundColor: backgroundColors[i]
        }]
            },
            options: {
                title: {
                    display: true,
                    text: questions[i],
                    fontSize: 35,
                    fontColor: 'rgb(25,25,25)'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1,
                            fontSize: 16,
                            fontStyle: 'bold',
                            fontColor: 'rgb(25,25,25)'
                        },
                        gridLines: {
                            display: false,
                            color: 'rgba(25,25,25,1)',
                        },
            }],
                    xAxes: [{
                        ticks: {
                            min: 0,
                            max: answers.length,
                            stepSize: 1,
                            fontStyle: 'bold',
                            fontColor: 'rgb(25,25,25)'
                        },
                        gridLines: {
                            display: false,
                            color: 'rgb(25,25,25)'
                        }
                    }]
                }
            }
        });

    }
}

// ============================================
// INIT =======================================
// ============================================
init();

async function init() {
    await getReslutFromDb();
    await makeAnswersArray();
    await makeQuestionsArray();
    await makeTagsArray();
    await sortAnswers();
    await makeAverageAnswersArray();
    await makeAvarageAnswersTagsArray();

    //console.log(tags);
    //console.log(averageAnswersByTags);

    await makeMonthlyChart();
}
