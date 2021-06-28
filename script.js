'use strict'
const data = [
    {
        question: 'How old is Aang when he is first discovered by Sokka and Katara?',
        'a': 12,
        'b': 112,
        'c': 13,
        'd': 111,
        answer: 'b'
    },
    {
        question: 'What element did Aang learn last before facing Ozai?',
        'a': 'Fire',
        'b': 'Water',
        'c': 'Earth',
        'd': 'Energy Bending',
        answer: 'd'
    },
    {
        question: 'What is Aangs favorite activity to do when he is in the South Pole?',
        'a': 'Surfing',
        'b': 'Building Snow Sculptures',
        'c': 'Ice Skating',
        'd': 'Penguin Sledding',
        answer: 'd'
    },
    {
        question: 'What is the name of the spirit that guards the desert library?',
        'a': 'Vaatu',
        'b': 'Koh',
        'c': 'Wan Shi Tong',
        'd': 'Hei Bai',
        answer: 'c'
    },
    {
        question: 'What Breed of Animal is Flopsie?',
        'a': 'Goat Gorilla',
        'b': 'Liger',
        'c': 'Tigerdillo',
        'd': 'Unkown',
        answer: 'a'
    }
]

// State
let currentQuestion = 0;
let score = 0;
let quiz_ended = false;

// DOM Elements
const list = document.getElementById('list');
const quiz_answers = document.getElementsByName('answer');
const quiz_heading_container = document.querySelector('.heading');
const submit_btn = document.querySelector('[type="submit"]');
const question = document.querySelector('.question');
const choice_a = document.querySelector('[for= "a"]');
const choice_b = document.querySelector('[for= "b"]');
const choice_c = document.querySelector('[for= "c"]');
const choice_d = document.querySelector('[for= "d"]');

// Functions
const checkAnswer = (choice) => {
    return choice.id === data[currentQuestion].answer
}

const loadQuiz = () => {
    if (currentQuestion === data.length) {
        alert('You have finished the quiz!');
        quiz_ended = true;
        display_score();
        return;
    }
    else {
        question.innerHTML = data[currentQuestion]['question'];
        choice_a.innerHTML = data[currentQuestion]['a'];
        choice_b.innerHTML = data[currentQuestion]['b'];
        choice_c.innerHTML = data[currentQuestion]['c'];
        choice_d.innerHTML = data[currentQuestion]['d'];

        return;
    }
}

const restart_quiz = () => {
    score = 0;
    currentQuestion = 0;
    quiz_ended = false;
    question.classList.remove('space')
    list.classList.remove('hide');
    submit_btn.textContent = 'Submit';
    loadQuiz();
}

const display_score = () => {
    question.textContent = `
    You scored a grand total of ${score} out 
    of ${data.length} questions correct`;
    question.classList.add('space')
    submit_btn.textContent = 'Play Again!';
    list.classList.add('hide');
    return;
}


loadQuiz();

// Submit answer / Next question event listener
submit_btn.addEventListener('click', (e) => {
    if (!quiz_ended) {
        e.preventDefault();
        quiz_answers.forEach(choice => {
            if (choice.checked) {
                if (checkAnswer(choice)) {
                    score++;
                }
                currentQuestion++;
                choice.checked = false;
                loadQuiz();
            }
        });
    } else {
        e.preventDefault();
        restart_quiz();
        return;
    }
})