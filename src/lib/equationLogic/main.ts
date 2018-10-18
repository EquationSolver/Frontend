import {EquationSolver} from './InputParser';
import InputParser = EquationSolver.InputParser;

declare let process : any;
process.argv.forEach(function (val, index, array) {
  var parser = new InputParser();
  parser.parseInput(val);
  console.log({
    "input": val,
    "results": [parser.toString()]
  });
});

