// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


(function (window) {
  // STEP 7: Create an object called 'byeSpeaker'
  var byeSpeaker = {};

  // DO NOT attach the speakWord to the byeSpeaker object
  var speakWord = "Good Bye";

  // STEP 8: Attach speak function to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
