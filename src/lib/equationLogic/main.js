"use strict";
exports.__esModule = true;
var InputParser_1 = require("./InputParser");
var InputParser = InputParser_1.EquationSolver.InputParser;
process.argv.forEach(function (val, index, array) {
    var parser = new InputParser();
    parser.parseInput(val);
    console.log({
        "input": val,
        "results": [parser.toString()]
    });
});
