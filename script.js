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
    }
]

let currentQuestion = 0;
let score = 0;
let quiz_ended = false;

const quiz_answers = document.getElementsByName('answer');
const submit_btn = document.querySelector('[type="submit"]');
const question = document.querySelector('.question');
const choice_a = document.querySelector('[for= "a"]');
const choice_b = document.querySelector('[for= "b"]');
const choice_c = document.querySelector('[for= "c"]');
const choice_d = document.querySelector('[for= "d"]');

function loadQuiz() {
    if (currentQuestion === data.length) {
        alert('You have finished the quiz!');
        quiz_ended = true;
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
loadQuiz()

submit_btn.addEventListener('click', (e) => {
    if (!quiz_ended) {
        e.preventDefault();
        quiz_answers.forEach(choice => {
            if (choice.checked) {
                if (choice.id === data[currentQuestion].answer) {
                    console.log('😫')
                    score++;
                }
                currentQuestion++;
                choice.checked = false;
                loadQuiz();
            }
        });
    } else {
        e.preventDefault();
        return;
    }
})