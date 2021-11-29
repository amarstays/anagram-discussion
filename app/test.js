const is_anagram = require("./anagram");

test('test if "this phrase" and  "earthships" is anagram or not', () => {
  expect(is_anagram("this phrase", "earthships")).toEqual(
    "earthships is an anagram of this phrase"
  );
});

test("test if both subject and candidate are blank", () => {
  expect(is_anagram("  ", "       ")).toEqual(
    "both subject and candidate are blank"
  );
});

test("test if both subject and candidate are non-words", () => {
  expect(is_anagram("\\'", "#@")).toEqual(
    "\\' and #@ are not words or phrases"
  );
});
