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

        let question = `<hr><p class="questionTxt">${array[i].question}</p>`

        for (let j = 0; j < 5; j++) {
            let scale = j + 1
            let scaleText;

            if (scale == 1) {
                scaleText = `Veldig<br>dårlig`
            }
            if (scale == 2) {
                scaleText = `Litt<br>dårlig`
            }
            if (scale == 3) {
                scaleText = `Helt<br>greit`
            }
            if (scale == 4) {
                scaleText = `Litt<br>bra`
            }
            if (scale == 5) {
                scaleText = `Veldig<br>bra`
            }

            let answers = `<button class="buttonRow${i} btn-form btn-${scale}" onclick="select(${scale},${i})">${scaleText}</button>`
            question += answers;
        }

        questionSet.className = "questionsSet";
        questionSet.id = `questionsSet${i}`;
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
