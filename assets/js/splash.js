var rhythm = require('./_rhythm');

// Random welcome message
var intro = "I write code for a living <span class=\"amp\">&</span> I like to create stuff &mdash; ";
var messages = [
    "although it's mostly limited to stuff that can be done from a couch. You don't want to see me using a hammer.", 
    "with a keyboard, a pen, a DSLR, a well stocked kitchen, a bass guitar or a drumset.", 
    "I also like to spend my evenings watching bad movies on Netflix but that's not as interesting.", 
    "well, not in the strict sense of fundamental physics, but you know what I mean.",
    "like, for instance, welcome messages for my website.",
    "check it out and tell me what you think."
    ];

// Change straight quotes to curly and double hyphens to em-dashes.
function smarten(a) {
  a = a.replace(/(^|[-\u2014\s(\["])'/g, "$1\u2018");       // opening singles
  a = a.replace(/'/g, "\u2019");                            // closing singles & apostrophes
  a = a.replace(/(^|[-\u2014/\[(\u2018\s])"/g, "$1\u201c"); // opening doubles
  a = a.replace(/"/g, "\u201d");                            // closing doubles
  a = a.replace(/--/g, "\u2014");                           // em-dashes
  return a
};

// Insert the random message on load.
document.addEventListener("DOMContentLoaded", function(event) {
  var message = messages[Math.floor(Math.random() * messages.length)];
  message = smarten(message);
  var elem = document.querySelector("#welcome .message");
  elem.innerHTML = ('<p>' + intro + message + '</p>');
});

