// var Prime = function(limit){
function Prime(limit){

    this.numList = []
    this.limit = limit
    this.multiTable = []
}


Prime.prototype.findPrimes = function(){

    //generate number range
    for(var n=2; n<=this.limit; n++){
        //skip if number is even
        if(n !== 2){
            if(n % 2 === 0){
                continue
            }
        }
        //The square root of a number, n, is the number that gives n when multiplied by itself.

        var temp = Math.floor(Math.sqrt(n))

        /**
         An integer is prime if it is not divisible by any prime less than or equal to its square root
        **/

        //flag to skip numbers not prime
        var isPrime = true; 
        for(var i = 2; i <= temp; i++){

            if(n % i === 0){
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
           this.numList.push(n)
        }
        
    }

    return this.numList

}

Prime.prototype.multiplicationTable = function(){

    //call helper function
    this.multiTable = matrix(this.numList)

    return this.multiTable
    
}

//helper method to create multiplication table
function matrix(args){

    var temp = [1]

    for(var i=0; i<args.length; i++){
        // temp[0] = 1
        temp.push(args[i])
    }

    var arr = [];
    arr.push(temp);
    // Creates all lines:
    for(var i=1; i < temp.length; i++){
        var arrMultiply = [];

        for(var j=0; j < temp.length; j++){
            arrMultiply.push(temp[i]*temp[j]);
        }
        arr.push(arrMultiply);
    }

    //set placehlder for multiplication
    arr[0][0] = -1;

    return arr;
}


var test = new Prime(30)

var x = test.findPrimes()
console.log("prime numbers list ", x)
var y = test.multiplicationTable(x)

console.log("multiplication table \n", y)


//export as module
var exports = module.exports = {
    init: Prime
}