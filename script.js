// Use allQuestions from questions.js
// Remove the old quizData definition

// Quiz state
let currentGroup = 1;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let timer = null;
let timeLeft = 45;
let correctAnswers = 0;
let totalQuestions = 0;
let currentQuestions = [];

// DOM elements
const mainMenu = document.getElementById('mainMenu');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const questionText = document.getElementById('questionText');
const optionsContainer = document.querySelector('.options-container');
const nextBtn = document.getElementById('nextBtn');
const timerElement = document.getElementById('timer');
const currentQuestionElement = document.getElementById('currentQuestion');
const totalQuestionsElement = document.getElementById('totalQuestions');
const backToMenuBtn = document.getElementById('backToMenu');
const restartBtn = document.getElementById('restartBtn');
const backToMainMenuBtn = document.getElementById('backToMainMenu');

// Group definitions
const groups = [
    { start: 1, end: 30, count: 30 },
    { start: 31, end: 60, count: 30 },
    { start: 61, end: 90, count: 30 },
    { start: 91, end: 120, count: 30 },
    { start: 121, end: 150, count: 30 },
    { start: 151, end: 180, count: 30 },
    { start: 181, end: 210, count: 30 },
    { start: 211, end: 240, count: 30 },
    { start: 241, end: 270, count: 30 },
    { start: 271, end: 281, count: 11 }
];

// Initialize the quiz
function initQuiz() {
    // Add event listeners for group selection
    document.querySelectorAll('.group-card').forEach(card => {
        card.addEventListener('click', () => {
            currentGroup = parseInt(card.dataset.group);
            startQuiz();
        });
    });

    // Add event listeners for navigation
    backToMenuBtn.addEventListener('click', showMainMenu);
    restartBtn.addEventListener('click', restartQuiz);
    backToMainMenuBtn.addEventListener('click', showMainMenu);
}

// Start quiz for selected group
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    selectedAnswer = null;
    
    // Get questions for current group
    currentQuestions = getQuestionsForGroup(currentGroup);
    totalQuestions = currentQuestions.length;
    
    // Update UI
    totalQuestionsElement.textContent = totalQuestions;
    showQuizContainer();
    displayQuestion();
    startTimer();
}

// Get questions for specific group
function getQuestionsForGroup(groupNumber) {
    const groupKey = `group${groupNumber}`;
    return allQuestions[groupKey] || [];
}

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle answers while keeping track of correct answer
function shuffleAnswers(question) {
    const options = [...question.options];
    const correctAnswer = options[question.correct];
    
    // Shuffle the options
    const shuffledOptions = shuffleArray(options);
    
    // Find the new index of the correct answer
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    return {
        question: question.question,
        options: shuffledOptions,
        correct: newCorrectIndex
    };
}

// Display current question
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    const shuffledQuestion = shuffleAnswers(question);
    
    questionText.textContent = shuffledQuestion.question;
    currentQuestionElement.textContent = currentQuestionIndex + 1;

    // Clear previous selections
    selectedAnswer = null;
    nextBtn.disabled = true;
    
    // Display shuffled options
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.remove('selected', 'correct', 'incorrect');
        option.querySelector('.option-text').textContent = shuffledQuestion.options[index];
        option.onclick = () => selectAnswer(index);
    });
    
    // Store the shuffled question for answer checking
    currentQuestions[currentQuestionIndex] = shuffledQuestion;
}

// Select answer
function selectAnswer(index) {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    selectedAnswer = index;
    const options = document.querySelectorAll('.option');
    
    // Remove previous selections
    options.forEach(option => option.classList.remove('selected'));
    
    // Mark selected option
    options[index].classList.add('selected');
    
    // Check if answer is correct
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    if (isCorrect) {
        correctAnswers++;
    }
    
    // Immediately show correct/incorrect feedback
    showAnswerFeedback(isCorrect);
    
    // Enable next button immediately
    nextBtn.disabled = false;
}

// Next question
function nextQuestion() {
    if (selectedAnswer === null) return;
    
    // Move to next question immediately
    currentQuestionIndex++;
    displayQuestion();
    resetTimer();
}

// Show answer feedback
function showAnswerFeedback(isCorrect) {
    const options = document.querySelectorAll('.option');
    const question = currentQuestions[currentQuestionIndex];
    
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
}

// Timer functions
function startTimer() {
    timeLeft = 45;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            // Auto-submit current answer or move to next question
            if (selectedAnswer !== null) {
                nextQuestion();
            } else {
                // No answer selected, move to next question
                currentQuestionIndex++;
                displayQuestion();
                resetTimer();
            }
        }
    }, 1000);
}

function resetTimer() {
    if (timer) {
        clearInterval(timer);
    }
    startTimer();
}

function updateTimerDisplay() {
    timerElement.textContent = timeLeft;
    
    // Change color when time is running low
    if (timeLeft <= 10) {
        timerElement.style.color = '#dc3545';
    } else {
        timerElement.style.color = 'white';
    }
}

// End quiz
function endQuiz() {
    clearInterval(timer);
    showResults();
}

// Show results
function showResults() {
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = totalQuestions - correctAnswers;
    document.getElementById('totalAnswered').textContent = totalQuestions;
    
    showResultsContainer();
}

// Navigation functions
function showMainMenu() {
    clearInterval(timer);
    mainMenu.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
}

function showQuizContainer() {
    mainMenu.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
}

function showResultsContainer() {
    mainMenu.classList.add('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

function restartQuiz() {
    startQuiz();
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz); 
