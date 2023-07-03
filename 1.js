// Define the quiz questions
var questions = [
    {
      question: "Question 1: What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0
    },
    {
      question: "Question 2: Who painted the Mona Lisa?",
      choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      correctAnswer: 0
    },
    {
      question: "Question 3: What is the largest planet in our solar system?",
      choices: ["Jupiter", "Saturn", "Mars", "Earth"],
      correctAnswer: 0
    },
    {
      question: "Question 4: Who is the author of 'HARRY POTTER'series?",
      choices: ["Harper Lee", "J.K. Rowling", "George Orwell", "Ernest Hemingway"],
      correctAnswer: 1
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");
  var nextButton = document.getElementById("nextButton");
  
  function loadQuestion() {
    var question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    choicesElement.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
      var choice = document.createElement("button");
      choice.textContent = question.choices[i];
      choice.value = i;
      choice.onclick = checkAnswer;
      choicesElement.appendChild(choice);
    }
  }
  
  function checkAnswer() {
    if (this.value == questions[currentQuestion].correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = "You scored " + score + " out of " + questions.length + " correct.";
    nextButton.disabled = true;
  }
  
  nextButton.onclick = loadQuestion;
  
  loadQuestion();
  