// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    var result = [];

    var letters = str.split(" ");

    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i].split("");

        letter[0] = letter[0].toUpperCase();

        result.push(letter.join(""));
    }

    return result.join(" ");

};
