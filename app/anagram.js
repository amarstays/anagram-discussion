/*
Feature: Check if the candidate word or a phrase is an anagram of the subject word or phrase.

Scenario Outline-1: Successfully identify anagrams and non-anagrams in both-directions
Scenario Outline-2: Understand failure cases better
*/

//
function is_anagram(subj, cand) {
  //Sanitize: remove any spaces and convert it to same case for sorting and comparisions

  subject = subj.replace(/\s*/g, "").toLowerCase();
  candidate = cand.replace(/\s*/g, "").toLowerCase();

  // check various invalid condition such as blank or non-words

  if (is_blank(subject) && is_blank(candidate)) {
    console.log("both subject and candidate are blank");
    return "both subject and candidate are blank";
  }

  if (is_nonPhrase(subject) && is_nonPhrase(candidate)) {
    console.log(subject + " and " + candidate + " are not words or phrases");
    return subject + " and " + candidate + " are not words or phrases";
  }

  // Below codes check the various invalid condition such as blank or non-words of any of the input
  let is_valid_words = false;
  is_blank(subject)
    ? console.log("subject is blank")
    : is_blank(candidate)
    ? console.log("candidate is blank")
    : is_nonPhrase(subject)
    ? console.log(subject + " is not a word or phrase")
    : is_nonPhrase(candidate)
    ? console.log(candidate + " is not a word or phrase")
    : (is_valid_words = true);

  if (!is_valid_words) return; //Break the execution in case of invalid subject or candidate

  // At this places, both subject and candidates are legal words.

  result =
    subject.split("").sort().join() === candidate.split("").sort().join()
      ? "is"
      : "is not";

  console.log("%s %s an anagram of %s", cand, result, subj);

  //additional return as a hook to Jest for test results
  return cand + " " + result + " an anagram of " + subj;
}

// returns true if input string is blank or spacees
function is_blank(word) {
  if (word.trim() === "") return true;
}

//retruns true if input word contains special characters or punctuations
function is_nonPhrase(word) {
  if (/[\W0-9]/g.test(word.trim())) return true;
}

//is_anagram("Hello", " Hel lo "); //uncomment for a quick test

module.exports = is_anagram;
