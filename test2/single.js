
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "civilwar",
                title: "When was the Civil War?",
                choices: [
                    "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                ],
                correctAnswer: "1850-1900"
            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "Who said 'Give me liberty or give me death?'",
                choicesOrder: "random",
                choices: [
                    "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                ],
                correctAnswer: "Patrick Henry"
            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "Who helped to start the boycott of the Mentgomery bus system by refusing to give up her seat on a segregated bus?",
                choicesOrder: "random",
                choices: [
                    "Phyllis Wheatley", "Mary Mclead Bethune", "Rosa Parks", "Shirley Chisholm"
                ],
                correctAnswer: "Rosa Parks"



            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "American Indians taught European settlers how to grow",
                choicesOrder: "random",
                choices: [
                    "Rice", "Sugar", "Tea", "Corn"
                ],
                correctAnswer: "Corn"



            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "What is the purpose of the Bill of Rights?",
                choicesOrder: "random",
                choices: [
                    "To say how much Americans should pay in taxes", "To protect freedoms like freedom of speech", "To describe the jobs of the President and congress", "To make washingon,DC,the capital of the United States"
                ],
                correctAnswer: "To protect freedoms like freedom of speech"



            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "In 1492,when Christonpher Columbus first landed in the Americans,he taught he was in",
                choicesOrder: "random",
                choices: [
                    "Spain", "The East Indies", "The Hawaiian Islands", "Italy"
                ],
                correctAnswer: "The East Indies"



            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "The first permanent English settlement in North American was",
                choicesOrder: "random",
                choices: [
                    "St.Augustine", "Santa Fe", "Jamestown", "New Amsterdan"
                ],
                correctAnswer: "Jamestown"



            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "Near the end of the second World War,the United States military  dropped atomic on cities in",
                choicesOrder: "random",
                choices: [
                    "China", "Germany", "Japan", "The Soviet Union"
                ],
                correctAnswer: "Japan"



            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "At the time Columbus arrived in the Americans,most of the area that is now called Mexicon was controlled by people called the",
                choicesOrder: "random",
                choices: [
                    "Apache", "Aztecs", "Ironquols", "Inuit"
                ],
                correctAnswer: "Azetecs"



            },
            {
                type: "radiogroup",
                name: "magnacarta",
                title: "What is the Magna Carta?",
                choicesOrder: "random",
                choices: [
                    "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                ],
                correctAnswer: "The foundation of the British parliamentary system"
            }
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });