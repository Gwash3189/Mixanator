var rewire = require("rewire");
var sinon = require('sinon');
var {expect} = require("chai");
var noop = function(){return true;}
var Mixanator = rewire("./build");
var composanatorMock = function() {
    return {
        compose: {
            left: function(){
                return function(){}
            }
        }
    };
}
var revert;

describe("Mixanator", function() {
    beforeEach(function() {
        revert = Mixanator.__set__("composanator", composanatorMock());
    });
    afterEach(function() {
        revert();
    })
    describe("mix", function() {
        it("Should be a function", function() {
            expect(Mixanator.mix).to.be.a("function");
        });
        it("Should return a function", function() {
            expect(Mixanator.mix(noop)).to.be.a("function");
        });
        it("Should return a function with an extend method on it", function() {
            expect(Mixanator.mix(noop).extend).to.be.a("function");
        });

    });
    describe("extend", function() {
        it("Should be a function", function() {
            expect(Mixanator.extend).to.be.a("function");
        });
        it("Should return a function", function() {
            expect(Mixanator.mix(noop).extend(noop)).to.be.a("function");
        });
        it("Should return a function with an extend method on it", function() {
            expect(Mixanator.mix(noop).extend(noop).extend).to.be.a("function");
        });
    });
});
