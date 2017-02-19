var assert = require('assert');
var expect    = require("chai").expect;
var app = require('../app.js')


describe("Prime number constructor", function(){

    var test = new app.init(3)

    // console.log("test constructor", test)

    describe("#Prime()", function(){
        it("should set limit", function(){

            expect(test.limit).to.equal(3)
        })
    })
    describe("#Prime()", function(){
        it("should set an empty array", function(){
            // console.log(test.numList)

            expect(test.numList).to.deep.equal([])
        })
    })
    describe("#findPrimes()", function(){
        it("should contain list of primes in the given limit", function(){

            var test2 = new app.init(10)
            // console.log("test2 ", test2)
            expect(test2.findPrimes()).to.deep.equal([2,3,5,7])
        })
    })
    
})