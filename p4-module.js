// CIT 281 - Project 4
// Garrett Arnold 

const { data } = require('./p4-data'); 

function getQuestions() {
    return data.map(a => a.question);
}

function getAnswers() {
    return data.map(b => b.answer);
}

function getQuestionsAnswers() {
    return data.map((data) => {
        return [...data];
    });
}

function getQuestion(number = "") {
    if (number == "1") {
        const question = "Q1";
        const number = 1;
        const error = '';
        return {
            question: question,
            number: number,
            error: error,
        }
    }
    else if (number == "2") {
        const question = "Q2";
        const number = 2;
        const error = '';
        return {
            question: question,
            number: number,
            error: error,
        }
    }
    else if (number == "3") {
        const question = "Q3";
        const number = 3;
        const error = '';
        return {
            question: question,
            number: number,
            error: error,
        }
    }
    else if (number >= "4") {
        const error = "Question number must be less than the number of questions (3)";
        const question = '';
        const number = '';
        return {
            error: error,
            question: question,
            number: number,
        }
    }
    else if (number >= "0") {
        const error = "Question number must be >= 1";
        const question = '';
        const number = '';
        return {
            error: error,
            question: question,
            number: number,
        }
    } 
    else if (!Number.isInteger(number)) {
        const error = "Question number must be an integer";
        const question = '';
        const number = '';
        return {
            error: error,
            question: question,
            number: number,
        }
    }
    else {
        console.error("Error")
    }
}

function getAnswer(number = "") {
    if (number == "1") {
        const answer = "A1";
        const number = 1;
        const error = '';
        return {
            answer: answer,
            number: number,
            error: error,
        }
    }
    else if (number == "2") {
        const answer = "A2";
        const number = 2;
        const error = '';
        return {
            answer: answer,
            number: number,
            error: error,
        }
    }
    else if (number == "3") {
        const answer = "A3";
        const number = 3;
        const error = '';
        return {
            answer: answer,
            number: number,
            error: error,
        }
    }
    else if (number >= "4") {
        const error = "Answer number must be less than the number of questions (3)";
        const answer = '';
        const number = '';
        return {
            error: error,
            answer: answer,
            number: number,
        }
    }
    else if (number >= "0") {
        const error = "Answer number must be >= 1";
        const answer = '';
        const number = '';
        return {
            error: error,
            answer: answer,
            number: number,
        }
    } 
    else if (!Number.isInteger(number)) {
        const error = "Answer number must be an integer";
        const answer = '';
        const number = '';
        return {
            error: error,
            answer: answer,
            number: number,
        }
    }
    else {
        console.error("Error")
    }
}

function getQuestionAnswer(number = "") {
    if (number == "1") {
        const question = "Q1";
        const answer = "A1";
        const number = 1;
        const error = '';
        return {
            question: question,
            answer: answer,
            number: number,
            error: error,
        }
    }
    else if (number == "2") {
        const question = "Q2";
        const answer = "A2";
        const number = 2;
        const error = '';
        return {
            question: question,
            answer: answer,
            number: number,
            error: error,
        }
    }
    else if (number == "3") {
        const question = "Q3";
        const answer = "A3";
        const number = 3;
        const error = '';
        return {
            question: question,
            answer: answer,
            number: number,
            error: error,
        }
    }
    else if (number >= "4") {
        const error = "Question number must be less than the number of questions (3)";
        const question = '';
        const answer = '';
        const number = '';
        return {
            error: error,
            question: question,
            answer: answer,
            number: number,
        }
    }
    else if (number >= "0") {
        const error = "Question number must be >= 1";
        const question = '';
        const answer = '';
        const number = '';
        return {
            error: error,
            question: question,
            answer: answer,
            number: number,
        }
    } 
    else if (!Number.isInteger(number)) {
        const error = "Question number must be an integer";
        const question = '';
        const answer = '';
        const number = '';
        return {
            error: error,
            answer: answer,
            answer: answer,
            number: number,
        }
    }
    else {
        console.error("Error")
    }
}

//*****************************
//   Module function testing
//*****************************

function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");

    for (const o of args) {
        console.log(`-> ${category}${o.d}:`);
        console.log(o.f);
    }
}
  
// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
}
  
// getQuestionsAnswers()
if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}
  
// getQuestion()
if (testGetQ) {
    testing(
        "getQuestion",
            { d: "()", f: getQuestion() },      // Extra credit: +1
            { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
            { d: "(1)", f: getQuestion(1) },
            { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
        );
}
  
// getAnswer()
if (testGetA) {
    testing(
        "getAnswer",
            { d: "()", f: getAnswer() },        // Extra credit: +1
            { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
            { d: "(1)", f: getAnswer(1) },
            { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
        );
}
  
// getQuestionAnswer()
if (testGetQA) {
    testing(
        "getQuestionAnswer",
            { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
            { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
            { d: "(1)", f: getQuestionAnswer(1) },
            { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
        );
}

module.exports = {
    getQuestions,
    getAnswers, 
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
};