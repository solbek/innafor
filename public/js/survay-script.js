let survayQA = {
    "besvarelse": [
         /*-----Transformasjonsledelse----*/
        {
            question: "Jeg opplever at treneren har tro på meg.",
            answer: "",
            tag: "Transformasjonsledelse"
            },
        {
            question: "Jeg opplever at treneren hører på mine forslag.",
            answer: "",
            tag: "Transformasjonsledelse"
            },
        {
            question: "Treneren min er opptatt av Fair Play.",
            answer: "",
            tag: "Transformasjonsledelse"
            },
        {
            question: "Treneren min ser meg og viser interesse for det jeg gjør.",
            answer: "",
            tag: "Transformasjonsledelse"
            },
        /*-----Tilfredshet----*/
        {
            question: "Jeg er fornøyd med måten treneren støtter meg.",
            answer: "",
            tag: "Tilfredshet"
            },
        {
            question: "Jeg er fornøyd med måten treneren gir meg tilbakemelding.",
            answer: "",
            tag: "Tilfredshet"
            },
        {
            question: "Jeg er fornøyd med treningene.",
            answer: "",
            tag: "Tilfredshet"
            },
        /*-----Motivasjonsklima----*/
        {
            question: "Jeg opplever at på laget mitt er det viktig å spille bedre enn de andre.",
            answer: "",
            tag: "Motivasjonsklima"
            },
        {
            question: "Jeg opplever at treneren gir mest oppmerksomhet til de beste spillerne.",
            answer: "",
            tag: "Motivasjonsklima"
            },
        {
            question: "Jeg opplever at treneren er opptatt av at jeg prøver nye ting.",
            answer: "",
            tag: "Motivasjonsklima"
            },
        {
            question: "Jeg opplever at det å lære er viktigere enn det å vinne." ,
            answer: "",
            tag: "Motivasjonsklima"
            }
    ]
};

createSurvay(survayQA.besvarelse);

function createSurvay(array) {
    let survay = getId("survay");
    for (let i = 0; i < array.length; i++) {

        let questionSet = document.createElement("div");
        //let answersSet = document.createElement("div");

        let question = `<hr><p class="questionTxt" alt="Spørsmål ${(i+1)}">${array[i].question}</p>`

        for (let j = 0; j < 5; j++) {
            let scale = j + 1
            let scaleText;

            if (scale == 1) {
                scaleText = `Helt<br>uenig`
            }
            if (scale == 2) {
                scaleText = `Litt<br>uenig`
            }
            if (scale == 3) {
                scaleText = `Ikke<br>sikker`
            }
            if (scale == 4) {
                scaleText = `Litt<br>enig`
            }
            if (scale == 5) {
                scaleText = `Helt<br>enig`
            }

            let answers = `<button class="buttonRow${i} btn-form btn-${scale}" onclick="select(${scale},${i})" alt="Knapp for å svare ${scaleText} på spørsmål ${array[i].question}">${scaleText}</button>`
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
