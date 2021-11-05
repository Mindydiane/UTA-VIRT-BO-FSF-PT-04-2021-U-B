// Write code to return the largest number in the given array
//  var arr = [3, 1, 17, 5, 6];

var maxNum = function(arr) {
    //there is an arr in test folder linking to file
    console.log(arr);
    var max = arr[0];
    // method to return highest number
    console.log(Math.max.apply(null, arr)); 
   return Math.max.apply(null, arr);
   
};

