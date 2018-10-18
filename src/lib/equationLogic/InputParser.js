"use strict";
exports.__esModule = true;
var equationLogic_1 = require("./equationLogic");
var equationLogic_2 = require("./equationLogic");
var EquationSolver;
(function (EquationSolver) {
    var InputParser = /** @class */ (function () {
        function InputParser() {
            this.input = "";
        }
        InputParser.prototype.toString = function () {
            return this.top.toString();
        };
        InputParser.prototype.parseInput = function (input) {
            //console.log(input);
            this.input = input;
            this.input = this.input.replace(" ", "");
            this.fixInput();
            this.top = new equationLogic_1.ParentNode();
            var directionIsleft = this.top.directionIsLeft() || true;
            for (var i = 0; i < this.input.length; i++) {
                var node = equationLogic_2.NodeFactory.createNode(this.input[i]);
                directionIsleft = node.directionIsLeft() === undefined ? directionIsleft : node.directionIsLeft();
                if (directionIsleft) {
                    this.top.addLeft(node);
                }
                else {
                    debugger;
                    this.top.addRight(node);
                }
            }
            this.top.postCreate();
            this.top.simplify();
        };
        InputParser.prototype.fixInput = function () {
            var _this = this;
            var regexes = [
                new RegExp(/([0-9]+|[A-z])\(/gm),
                new RegExp(/\)([0-9]+|[A-z])/gm),
                new RegExp(/([0-9]+|[A-z])[A-z]/gm),
                new RegExp(/([A-z])[0-9]+/gm)
            ];
            this.input = this.input.replace(")(", ")*(");
            regexes.forEach(function (regex) {
                var m;
                while ((m = regex.exec(_this.input)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    m.forEach(function (match, groupIndex) {
                        var index = m.index + match.length;
                        if (groupIndex > 0) {
                            _this.input = (_this.input.substring(0, index) + ("*" + _this.input.substring(index)));
                        }
                    });
                }
            });
        };
        return InputParser;
    }());
    EquationSolver.InputParser = InputParser;
})(EquationSolver = exports.EquationSolver || (exports.EquationSolver = {}));
