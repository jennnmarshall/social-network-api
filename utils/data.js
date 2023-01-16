const names = [
"Andy",
"Sidonius",
"Jenn",
"Dolores",
"Jimmy",
"Mikey",
"Shaylah",
"Naiah",
"David",
"Josh",
"Angela",
"Hallelujah",
"Archie",
"Harry",
"Gracie",
"Barry",
"Trixie",
"Marcia",
"Annabelle",
"Katie",
"Alan",
"Danny",
];

const nick = [
    "Kitty",
    "Robot",
    "Bear",
    "Tron",
    "Android",
    "Alien",
    "Rules",
    "theQueen",
];

const reactionBody = [
  "YES",
  "No way",
  "You've got this all wrong",
  "Signs point to yes",
  "Maybe",
  "That's the nuttiest thing I've ever heard",
  "I was just thinking the same thing",
  "Why did you post this?",
  "Who asked?",
];

const thoughtText = [
  "The Geordie Shore is an underrated reality series",
  "I can't believe he was dead the whole time",
  "I was elected to lead, not to read",
  "Who wants to come to the mall with me",
  "I like turtles",
  "I can't do that, Dave",
  "Help me, Obi Wan Kenobi, you're my only hope",
  "The Dude abides",
  "Come over and watch Star Trek",
  "Dude, where's my car?",
]

const users = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user name
const getRandomUserName = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(nick)}`;

const getRandomReact = () => 
  `${getRandomArrItem(reactionBody)}`
;

const getRandomThought = () => 
  `${getRandomArrItem(thoughtText)}`
;

// Export the functions for use in seed.js
module.exports = { getRandomUserName, getRandomReact, getRandomThought };
