// CIT 281 - Project 4
// Garrett Arnold 

const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer } = require('./p4-module.js'); 
const fastify = require("fastify")();

fastify.get("/cit/question", function (request, reply) {
    reply
        .code(200)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({
            "error": "",
            "statusCode": 200,
            "questions": [
                "Q1",
                "Q2",
                "Q3"
            ]
        });
});

fastify.get("/cit/answers", function (request, reply) {
    reply
        .code(200)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({
            "error": "",
            "statusCode": 200,
            "answers": [
                "A1",
                "A2",
                "A3"
            ]
        });
});

fastify.get("/cit/questionanswer", function (request, reply) {
    reply
        .code(200)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({
            "error": "",
            "statusCode": 200,
            "questions_answers": [
                {
                    "question": "Q1",
                    "answer": "A1"
                },
                {
                    "question": "Q2",
                    "answer": "A2"
                },
                {
                    "question": "Q3",
                    "answer": "A3"
                }
            ]
        });
});

fastify.get("/cit/question/:number", function (request, reply) {
    const { number = "" } = request.params;
    reply
        .code(200)
        .header("Content-Type", "text/json; charset=utf-8")
        .send(
            {
            "error": "",
            "statusCode": 200,
            "question": "Q" + number,
            "number": number,
        });
});

fastify.get("/cit/answer/:number", function (request, reply) {
    const { number = "" } = request.params;
    reply
        .code(200)
        .header("Content-Type", "text/json; charset=utf-8")
        .send(
            {
            "error": "",
            "statusCode": 200,
            "answer": "A" + number,
            "number": number,
        });
});

fastify.get("/cit/questionanswer/:number", function (request, reply) {
    const { number = "" } = request.params;
    reply
        .code(200)
        .header("Content-Type", "text/json; charset=utf-8")
        .send(
            {
            "error": "",
            "statusCode": 200,
            "question": "Q" + number,
            "answer": "A" + number,
            "number": number,
        });
});

fastify.get("*", function (request, reply) {
    reply
        .code(404)
        .header("Content-Type", "text/json; charset=utf-8")
        .send(
            {
                "error": "Route not found",
                "statusCode": 404
        });
});

fastify.get("/cit/student", function (request, reply) {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send([students]);
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, function (err, address) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});