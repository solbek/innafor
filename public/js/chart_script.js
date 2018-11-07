let ctx = document.getElementById("myChart").getContext('2d');

let answers = [
    [4, 2, 5, 3, 4, 4, 1, 2, 3, 4],
    [5, 3, 4, 4, 4, 4, 2, 3, 1, 3],
    [1, 2, 1, 3, 2, 4, 1, 5, 1, 2],
    [3, 2, 4, 2, 3, 4, 2, 1, 2, 3],
    [1, 2, 1, 3, 2, 4, 1, 5, 1, 2],
    [3, 2, 4, 2, 3, 4, 2, 1, 2, 3]
];

//Sorterte svar - Første array representerer første spørsmål.
//Om array[0][0] = 3 betyr det at 3 besvarte spørsmål 1 med 1.
let sortedAnswers = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]];

/*let sortedAnswers = {
    question1: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question2: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question3: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question4: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question5: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question6: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question7: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question8: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question9: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    question10: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    }
};*/

async function sortAnswers() {
    for (let i = 0; i < answers.length; i++) {
        let player = answers[i];
        for (let j = 0; j < player.length; j++) {
            let answer = player[j];
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
sortAnswers();
console.log(sortedAnswers);

let questions = ["Spm 1", "Spm 2", "Spm 3", "Spm 4", "Spm 5", "Spm 6", "Spm 7", "Spm 8", "Spm 9", "Spm 10"];
let averageAnswers = [5, 3, 3, 1, 2, 3, 2, 4, 4, 5];
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


let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: questions,
        datasets: [{
            label: 'Gj.sitt',
            data: averageAnswers,
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
                gridLines: {
                    display: false,
                    color: 'rgb(255,255,255)'
                }
            }]
        }
    }
});
makeCharts();

// FUNCTIONS =========================

function makeCharts() {
    let div = document.createElement("div");
    for (let i = 0; i < questions.length; i++) {
        let html = "";
        html += `<div class="horizontal-chart-container">`;
        html += `<div class="horizontal-chart-wrapper">`;
        html += `<canvas id="canvas${i}" class="horizontal-chart"></cavnas>`;
        html += `</div>`;
        html += `</div>`;

        div.innerHTML += html;
    }
    document.body.appendChild(div);
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
