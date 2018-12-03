let survayQA = {
    "besvarelse": [
        {
            question: "Spm1",
            answer: "",
            tag: "trivsel"
            },
        {
            question: "Spm2",
            answer: "",
            tag: "trivsel"
            },
        {
            question: "Spm3",
            answer: "",
            tag: "treningsinnhold"
            }


        ]
};



createSurvay(survayQA.besvarelse);



function createSurvay(array) {
    let survay = getId("survay");
    for (let i = 0; i < array.length; i++) {

        let questionSet = document.createElement("div");
        //let answersSet = document.createElement("div");

        let question = `<h3>${array[i].question}</h3>`

        for (let j = 0; j < 5; j++) {
            let scale = j + 1
            let scaleText;

            if (scale == 1) {
                scaleText = "Veldig dårlig"
            }
            if (scale == 2) {
                scaleText = "Litt dårlig"
            }
            if (scale == 3) {
                scaleText = "Helt greit"
            }
            if (scale == 4) {
                scaleText = "Litt bra"
            }
            if (scale == 5) {
                scaleText = "Veldig bra"
            }

            let answers = `<button class="scale${scale} survayButtons buttonRow${i}" onclick="select(${scale},${i})">${scaleText}</button>`
            question += answers;
        }

        questionSet.className = "questionsSet";
        questionSet.innerHTML = question;
        survay.appendChild(questionSet);
    }
}

function select(scale, rowIndex) {

    survayQA.besvarelse[rowIndex].answer = scale;

    let buttonRow = document.getElementsByClassName(`buttonRow${rowIndex}`)

    for (i = 0; i < buttonRow.length; i++) {
        buttonRow[i].className = buttonRow[i].className.replace(" selected", "");
    }

    buttonRow[scale - 1].className += " selected";

    console.log(survayQA.besvarelse);

}
