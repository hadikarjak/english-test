var quiz = {
    // (A) PROPERTIES
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [{
            q: "1- I ______ bus on Mondays.",
            o: [
                " 'm going to work with",
                " 'm going to work by",
                "go to work with",
                "go to work by"
            ],
            a: 3 // arrays start with 0, so answer is 70 meters
        },
        {
            q: "2- Sorry, but this chair is ______.",
            o: [
                "me",
                "mine",
                "my",
                "our"
            ],
            a: 1
        },
        {
            q: "3- A: 'How old ______?'   B: 'I ______ .'",
            o: [
                "are you / am 20 years old",
                "have you / have 20 years old",
                "are you / am 20 years.",
                "do you have / have 20 years."
            ],
            a: 0
        },
        {
            q: "4- I ______ to the cinema.",
            o: [
                "not usually go",
                "don't usually go",
                "don't go usually",
                "do not go usually"
            ],
            a: 1
        },
        {
            q: "5- Where ______ ?",
            o: [
                "your sister works",
                "your sister work",
                "does your sister work",
                "do your sister work"
            ],
            a: 2
        },
        {
            q: "6- The test is ______ February.",
            o: [
                "in",
                "at",
                "on",
                "over"
            ],
            a: 0
        },
        {
            q: "7- I eat pasta ______ week.",
            o: [
                "twice in a",
                "twice",
                "one",
                "once"
            ],
            a: 1
        },
        {
            q: "8- I don't have ______ free time",
            o: [
                "many",
                "any",
                "a lot",
                "some"
            ],
            a: 1
        },
        {
            q: "9- A: '_____ to the cinema tomorrow?",
            o: [
                "We will go",
                "Do we go",
                "We go",
                "Shall we go"
            ],
            a: 3
        },
        {
            q: "10- We went to the market ______ some vegetables.",
            o: [
                "to buy",
                "for buy",
                "for to buy",
                "for buying"
            ],
            a: 0
        },
        {
            q: "11- Sorry, but when you called I ______ a shower.",
            o: [
                "had",
                "did have",
                "was having",
                "were having"
            ],
            a: 2
        },
        {
            q: "12- ______ are very friendly and very intelligent",
            o: [
                "Dolphins",
                "The dolphins",
                "A dolphin",
                "The dolphin"
            ],
            a: 0
        },
        {
            q: "13- Somebody stole ______ yesterday.",
            o: [
                "the car of my mother",
                "my car mother",
                "my mother's car",
                "my mother car"
            ],
            a: 2
        },
        {
            q: "14- ______ with me?",
            o: [
                "Do you like to dance",
                "Would you like to dance",
                "Do you like dance",
                "Would you like dancing"
            ],
            a: 1
        },
        {
            q: "15- She is ______ her sister, I think.",
            o: [
                "more happier than",
                "more happy that",
                "happier that",
                "happier than"
            ],
            a: 3
        },
        {
            q: "16- I couldn't eat ______ before the exam.",
            o: [
                "nothing",
                "anything",
                "everything",
                "something"
            ],
            a: 1
        },
        {
            q: "17- Please, pass me the remote. ______ TV.",
            o: [
                "I'm watching",
                "I will watch",
                "I'm going to watch",
                "I might watch"
            ],
            a: 2
        },
        {
            q: "18- I'll call you when I ______ home",
            o: [
                "arrive",
                "'m going to arrive",
                "will arrive",
                "arrived"
            ],
            a: 0
        },
        {
            q: "19- ______ Japan ?",
            o: [
                "Have you ever gone in",
                "Do you have been in",
                "Have you ever been to",
                "Have you ever been into"
            ],
            a: 2
        },
        {
            q: "20- He drives very ______.",
            o: [
                "slow",
                "slower",
                "more slowly",
                "slowly"
            ],
            a: 3
        },
        {
            q: "21- Can you ______ the lights? I can't see",
            o: [
                "open",
                "turn on",
                "start",
                "put on"
            ],
            a: 1
        },
        {
            q: "22- We couldn't find a taxi, ______ we walked home",
            o: [
                "so",
                "because",
                "but",
                "although"
            ],
            a: 0
        },
        {
            q: "23- Tomorrow I ______ get up early; it's my day off.",
            o: [
                "mustn't",
                "must",
                "haven't to",
                "don't have to"
            ],
            a: 3
        },
        {
            q: "24- I ______ this coffee. It tastes horrible.",
            o: [
                "am not like",
                "don't like",
                "'m not liking",
                "not like"
            ],
            a: 1
        },
        {
            q: "25- We ______ yesterday.",
            o: [
                "arrived",
                "did arrive",
                "have arrive",
                "have arrived"
            ],
            a: 0
        },
        {
            q: "26- When I arrive home, I'm going to have a ______ bath.",
            o: [
                "relaxing",
                "relaxed",
                "relax",
                "relaxation"
            ],
            a: 0
        },
        {
            q: "27- A: 'We don't have any milk.' ,  B: 'Really? I ______ more.'",
            o: [
                "'m going to buy",
                "'ll buy",
                "'m buying",
                "buy"
            ],
            a: 1
        },
        {
            q: "28- We ______ to seeing you next Thursday.",
            o: [
                "really want",
                "hope",
                "are looking forward",
                "really wish"
            ],
            a: 2
        },
        {
            q: "29- I'd like to go ______ in the park.",
            o: [
                "to walking",
                "for walk",
                "for a walk",
                "to walk"
            ],
            a: 2
        },
        {
            q: "30- German ______ in Germany, Austria and Switzerland.",
            o: [
                "is spoken",
                "spoken",
                "speaks",
                "is speak"
            ],
            a: 0
        },
        {
            q: "31- I ______ your book. It's fantastic. I'll finish it tonight.",
            o: [
                "'ve been reading",
                "read",
                "'ve read",
                "'m read"
            ],
            a: 0
        },
        {
            q: "32- He went on a business _____ to New York.",
            o: [
                "travel",
                "journey",
                "commute",
                "trip"
            ],
            a: 3
        },
        {
            q: "33- If I tell you a secret, ______ anyone ?",
            o: [
                "are you tell",
                "do you tell",
                "will you tell",
                "are you telling"
            ],
            a: 2
        },
        {
            q: "34- My brother and I don't ______ very well.",
            o: [
                "get off",
                "get on",
                "go on",
                "break off"
            ],
            a: 1
        },
        {
            q: "35- I ______ fifty pages, but I have to read fifty more.",
            o: [
                "'ve been reading",
                "was reading",
                "'ve reading",
                "'ve read"
            ],
            a: 3
        },
        {
            q: "36- If I ______ you, I wouldn't do it.",
            o: [
                "was",
                "were",
                "would be",
                "am"
            ],
            a: 1
        },
        {
            q: "37- This painting ______ a fortune.",
            o: [
                "is worth",
                "is value",
                "values",
                "worths"
            ],
            a: 0
        },
        {
            q: "38- She is the same age ______ me.",
            o: [
                "than",
                "that",
                "what",
                "as"
            ],
            a: 3
        },
        {
            q: "39- It's obvious that you...",
            o: [
                "don't drive as faster as me.",
                "drive faster than me.",
                "drive more fast than I",
                "drive no faster than I."
            ],
            a: 1
        },
        {
            q: "40- The boat sank, but they ______ swim to the shore.",
            o: [
                "could",
                "were able to",
                "can",
                "abled "
            ],
            a: 1
        },
        {
            q: "41- If I had known that she was there, I ______  hello.",
            o: [
                "would say",
                "said",
                "had said",
                "would have said"
            ],
            a: 3
        },
        {
            q: "42- I think he ______ in prison for what he did",
            o: [
                "should put",
                "could been put",
                "should be put",
                "could put"
            ],
            a: 2
        },
        {
            q: "43- He ______ him with his homework.",
            o: [
                "told me to help",
                "said me that I help",
                "said me I help",
                "told me that I help"
            ],
            a: 0
        },
        {
            q: "44- We ______. We hired a very good interior designer.",
            o: [
                "redecorated the kitchen",
                "had redecorated the kitchen",
                "got redecorated the kitchen",
                "had the kitchen redecorated"
            ],
            a: 3
        },
        {
            q: "45- A: 'I had a sauna yesterday'   B: '___ ? That's great.'",
            o: [
                "Did you",
                "You did",
                "Had you",
                "Didn't you"
            ],
            a: 0
        },
        {
            q: "46- I wonder ______ at the party.",
            o: [
                "who was she talking",
                "who she was talking to",
                "who was she talking to",
                "who she was talking"
            ],
            a: 1
        },
        {
            q: "47- Which is correct ?",
            o: [
                "How older people are, wiser they become",
                "If older people are, wiser they become",
                "The more old the people, the more wise",
                "The older people are, the wiser they become"
            ],
            a: 3
        },
        {
            q: "48- I bought a ______ jacket.",
            o: [
                "nice red leather",
                "leather nice red",
                "red nice leather",
                "red leather nice"
            ],
            a: 0
        },
        {
            q: "49- By 2025 we ______ the cure for type 1 diabetes.",
            o: [
                "will be discovering",
                "are discovering",
                "are going to be discovering",
                "will have discovered"
            ],
            a: 3
        },
        {
            q: "50- The building ______.",
            o: [
                "was damaged badly in the hurricane last year",
                "was badly damaged last year in the hurricane",
                "was badly damaged in the hurricane last year",
                "last year was damaged badly in the hurricane"
            ],
            a: 2
        },
        {
            q: "51- If only he ______ doing that. It's so annoying !",
            o: [
                "had stopped",
                "would stop",
                "would have stopped",
                "stopped"
            ],
            a: 1
        },
        {
            q: "52- If my parents hadn't met, I ______ here now.",
            o: [
                "wouldn't be",
                "wouldn't have been",
                "hadn't been",
                "weren't"
            ],
            a: 0
        },
        {
            q: "53- I like the job, but I think it'll be difficult to ______ nights.",
            o: [
                "be used to working",
                "uses to work",
                "get used to working",
                "get used to work"
            ],
            a: 2
        },
        {
            q: "54- You ______ me immediately. Now it's too late.",
            o: [
                "had told",
                "would have told",
                "should tell",
                "should have told"
            ],
            a: 3
        },
        {
            q: "55- Not only ______ you, but he also lied to you.",
            o: [
                "did he disrespect",
                "he disrespected",
                "he did disrespect",
                "he has disrespected"
            ],
            a: 0
        },
        {
            q: "56- ______ should be angry, not you.",
            o: [
                "It's me who",
                "It's",
                "Who",
                "There's me who"
            ],
            a: 0
        },
        {
            q: "57- I ______ you, but I forgot.",
            o: [
                "would tell",
                "was telling",
                "will tell",
                "was going to tell"
            ],
            a: 3
        },
        {
            q: "58- It's ______ to Paris.",
            o: [
                "a two hours journey",
                "two hours' journey",
                "a two hour's journey",
                "a two-hours journey"
            ],
            a: 1
        },
        {
            q: "59- They _____ to arrive next Friday.",
            o: [
                "are set",
                "are on the verge",
                "are due",
                "are on the brink"
            ],
            a: 2
        },
        {
            q: "60- I didn't want to do it in the past, but now I ______.",
            o: [
                "would want",
                "'m wanting to",
                "want",
                "want to"
            ],
            a: 3
        }
    ],

    // (A2) HTML ELEMENTS
    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper

    // (A3) GAME FLAGS
    now: 0, // current question
    score: 0, // current score

    // (B) INIT QUIZ HTML
    init: () => {
        // (B1) WRAPPER
        quiz.hWrap = document.getElementById("quizWrap");

        // (B2) QUESTIONS SECTION
        quiz.hQn = document.createElement("div");
        quiz.hQn.id = "quizQn";
        quiz.hWrap.appendChild(quiz.hQn);

        // (B3) ANSWERS SECTION
        quiz.hAns = document.createElement("div");
        quiz.hAns.id = "quizAns";
        quiz.hWrap.appendChild(quiz.hAns);

        // (B4) GO!
        quiz.draw();
    },

    // (C) DRAW QUESTION
    draw: () => {
        // (C1) QUESTION
        quiz.hQn.innerHTML = quiz.data[quiz.now].q;

        // (C2) OPTIONS
        quiz.hAns.innerHTML = "";
        for (let i in quiz.data[quiz.now].o) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "quiz";
            radio.id = "quizo" + i;
            quiz.hAns.appendChild(radio);
            let label = document.createElement("label");
            label.innerHTML = quiz.data[quiz.now].o[i];
            label.setAttribute("for", "quizo" + i);
            label.dataset.idx = i;
            label.addEventListener("click", () => { quiz.select(label); });
            quiz.hAns.appendChild(label);
        }
    },

    // (D) OPTION SELECTED
    select: (option) => {
        // (D1) DETACH ALL ONCLICK
        let all = quiz.hAns.getElementsByTagName("label");
        for (let label of all) {
            label.removeEventListener("click", quiz.select);
        }

        // (D2) CHECK IF CORRECT
        let correct = option.dataset.idx == quiz.data[quiz.now].a;
        if (correct) {
            quiz.score++;
            option.classList.add("correct");
        } else {
            option.classList.add("wrong");
        }

        // (D3) NEXT QUESTION OR END GAME
        quiz.now++;
        setTimeout(() => {
            if (quiz.now < quiz.data.length) { quiz.draw(); } else {
                quiz.hQn.innerHTML = `لقد أجبت على ${quiz.score} من ${quiz.data.length} سؤال.
                
               <br>
               <h5 style="text-align:right">هذا الإختبار مصمم ومطور من قبل أكاديمية الفارس، إذا كنت مهتم بتعلم اللغة الإنجليزية والتسجيل بدوراتنا المتخصصة في اللغة الإنجليزية راسلنا عبر الرابط أدناه وأرسل لنا صورة شاشة للنتيجة لإضافتك للمستوى المطلوب الذي تحتاجه
              راسلنا عبر الرابط التالي :
              </h5>
              <br>
              <a href="https://wsend.co/0097455312715" style="background:#ffd249;text-align:center;padding:10px;color:#2c2f58;border-radius:3px;">تواصل معنا الآن</a>
                `;
                quiz.hAns.innerHTML = "";
            }
        }, 1000);
    },


    // (E) RESTART QUIZ
    reset: () => {
        quiz.now = 0;
        quiz.score = 0;
        quiz.draw();
    }
};
window.addEventListener("load", quiz.init);
