"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Patrick M. Capuano
   Date:   2.14.19
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/

// Calls the "randomInt" function to get a that random number one through ten and prints it.
var randomQ = randomInt(10);

// Function that generates a random integer using two parameters and methods to return an integer in the specified range.
function randomInt(size) {
    return Math.floor(Math.random() * size);
}

// Calling the getQuote function using randomQ as a varible of the parameter to get a random Hane Austen quote.
var quoteElem = getQuote(randomQ);

// By scanning the whole document for the "quote" ID (which was added in), it adds in the text that "quoteElem" has become with its respective value into the tag area with the ID.
document.getElementById("quote").innerHTML = quoteElem;

function getQuote(n) {
    var quotes = [
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
        "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
        "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
        "Life seems but a quick succession of busy nothings.",
        "Our scars make us know that our past was for real.",
        "I cannot speak well enough to be unintelligible.",
        "One cannot be always laughing at a man without now and then stumbling on something witty.",
        "Men were put into the world to teach women the law of compromise.",
        "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
    ];

    return quotes[n];
}