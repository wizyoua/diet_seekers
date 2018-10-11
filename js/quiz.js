// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
var quiz = {
    title: 'My quiz',
    questions: [
        {
            text: "What is your gender?",
            image: "images/question2.jpg", 
            responses: [
                { text: 'Male', correct: true },
                { text: 'Female', correct: true},
            ]
        }, {
            text: "How about your age?",
            image: "images/question1.jpg",
            responses: [
                { text: '18-24', correct: true },
                { text: '25-34', correct: true },
                { text: '35-44', correct: true },
                { text: '45-54', correct: true },
                { text: '55-64', correct: true },
            ]
        }, {
            text: "What is your main fitness goal?",
            image: "images/question5.jpg",
            responses: [
                { text: 'Lose Weight', correct: true },
                { text: 'Build Muscle', correct: true },
                { text: 'Better Overall Health', correct: true },
                { text: 'Train For an event', correct: true },
            ]
        }, {
            text: "Do you use any vitamins or supplements?",
            image: "images/question3.jpg",
            responses: [
                { text: 'Yes', correct: true },
                { text: 'No', correct: true },
                
            ]
        },  {
            text: "What kind of meals are you most interested in?",
            image: "images/question4.jpg",
            responses: [
                { text: 'Keto', correct: true },
                { text: 'Paleo', correct: true },
                { text: 'Keto + Paleo', correct: true },
                { text: 'Vegan', correct: true },

            ]
        }
    ]
};

new Vue({
    el: '#app',
    data: {
        quiz: quiz,
        // Store current question index
        questionIndex: 0,
        // An array initialized with "false" values for each question
        // It means: "did the user answered correctly to the question n?" "no".
        userResponses: Array(quiz.questions.length).fill(false)
    },
    // The view will trigger these methods on click
    methods: {
        // Go to next question
        next: function () {
            this.questionIndex++;
        },
        // Go to previous question
        prev: function () {
            this.questionIndex--;
        },
        // Return "true" count in userResponses
        score: function () {
            
            return this.userResponses.filter(function (val) { return val }).length;
        }
    }
});