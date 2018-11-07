let ctx = document.getElementById("myChart").getContext('2d');

let answers = [
    [4, 2, 5, 3, 4, 4, 1, 2, 3, 4],
    [5, 3, 4, 4, 4, 4, 2, 3, 1, 3],
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

function sortAnswers() {
    for (let i = 0; i < answers.length; i++) {
        let player = answers[i];
        for (let j = 0; j < player.length; j++) {
            let answer = player[j];
            if (answer == 1) {
                sortedAnswers[j][1] += 1;
            } else if (answer == 2) {
                sortedAnswers[j][2] += 1;
            } else if (answer == 3) {
                sortedAnswers[j][3] += 1;
            } else if (answer == 4) {
                sortedAnswers[j][4] += 1;
            } else if (answer == 5) {
                sortedAnswers[j][5] += 1;
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
    type: 'horizontalBar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Besvarelser',
            data: averageAnswers,
            backgroundColor: backgroundColors[0]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
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
                    min: 0
                },
                gridLines: {
                    display: false,
                    color: 'rgb(255,255,255)'
                }
            }]
        }
    }
});

/*let myChart = new Chart(ctx, {
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
});*/


// FUNCTIONS =========================

function makeCharts() {
    let div = document.createElement("div");
    div.classList.add("horizontal-chart-container");
    for (let i = 0; i < questions.length; i++) {
        let html = "";
        let questionTitle = questions[i];
        html += `<h2>${questionTitle}</h2>`;
        html += `<canvas id="canvas${i}"><cavnas>`;
        let
    }
}
