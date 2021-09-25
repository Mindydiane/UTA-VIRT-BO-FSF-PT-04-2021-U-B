// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {};
// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    console.log(str);
    // having an array
    // console.log(str.length);
    // console.log(str[1]);
    // var result = 0;
    var vowels = ["a", "e", "i", "o", "u", "y"];

    //looping through string to see if for letter is equal to the array of vowels
    for (var i = 0; i < str.length; i++) {
        var letter = str[i].toLowerCase();
        console.log(letter);
        console.log(vowels.indexOf(letter));

        // if (vowels.indexOf(letter) !== -1) {
        //     result += 1;
        //  result = result + 1;
        //      result++;
        // }
    }
    // return result;
};
