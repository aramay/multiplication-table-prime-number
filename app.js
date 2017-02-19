// var Prime = function(limit){
function Prime(limit){

    this.numList = []
    this.limit = limit
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

    console.log("multi ", this.numList)

    var list = this.numList

    for(var i=0; i<list.length; i++){

        var prime = list[i]

        for(var product=1; product<=10; product++){

            console.log(prime + " x " + product + " = " + prime*product)
            
        }
        console.log("*************")
    }
}

var test = new Prime(30)

console.log(test.findPrimes())
console.log(test.multiplicationTable())

var exports = module.exports = {
    init: Prime
}

// console.log(exports)