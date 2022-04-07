/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @author Airam Rafael Luque Leon
 * @since Apr 07 2022
 * @desc This program exemplifies the command pattern for a calculator
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

/**
 * This function sums two numbers and returns the result
 * @param {number} number1 
 * @param {number} number2 
 * @return the sum of the two numbers
 */
function add(number1, number2) { return number1 + number2; }

/**
 * This function subtract two numbers and returns the result
 * @param {number} number1 
 * @param {number} number2 
 * @return the subtraction of the two numbers
 */
function sub(number1, number2) { return number1 - number2; }

/**
 * This function multiplies two numbers and returns the result
 * @param {number} number1 
 * @param {number} number2 
 * @return the multiplication of the two numbers
 */
function mul(number1, number2) { return number1 * number2; }

/**
 * This function divides two numbers and returns the result
 * @param {number} number1 
 * @param {number} number2 
 * @return the division of the two numbers
 */
function div(number1, number2) { return number1 / number2; }

/**
 * Class that represents a command
 */
class Command {
  /**
   * Creates the command
   * 
   * @param {function} execute 
   * @param {function} undo 
   * @param {number} value 
   */
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

/**
 * This function encapsulates the add operation
 * @param {number} value 
 * @return {number} the value of the operation
 */
var AddCommand = function (value) {
  return new Command(add, sub, value);
};

/**
 * This function encapsulates the subtract operation
 * @param {number} value 
 * @return {number} the value of the operation
 */
var SubCommand = function (value) {
  return new Command(sub, add, value);
};

/**
 * This function encapsulates the multiplicacion operation
 * @param {number} value 
 * @return {number} the value of the operation
 */
var MulCommand = function (value) {
  return new Command(mul, div, value);
};

/**
 * This function encapsulates the division operation
 * @param {number} value 
 * @return {number} the value of the operation
 */
var DivCommand = function (value) {
  return new Command(div, mul, value);
};

/**
 * This emulates a calculator that can undo
 * operations
 * @return {number} the value of the operation
 */
var Calculator = function () {
  var current = 0;
  var commands = [];

  /**
   * This funciton receives a command function and return the name of
   * the given command
   * @param {function} command 
   * @return {string} the name of the command
   */
  function action(command) {
    var name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    /**
     * This function executes the given command
     * @param {function} command 
     */
    execute: function (command) {
      current = command.execute(current, command.value);
      commands.push(command);
      console.log(action(command) + ": " + command.value);
    },

    /**
     * This funciton pops the last command and
     * executes the reverse action
     */
    undo: function () {
      var command = commands.pop();
      current = command.undo(current, command.value);
      console.log("Undo " + action(command) + ": " + command.value);
    },

    /**
     * This function return the current value on the calculator
     * @return {number} the current value
     */
    getCurrentValue: function () {
      return current;
    }
  }
}

/**
 * This function creates a new calculator, executes a few commands, undo the
 * last two and tells the current value on the calculator
 */
function run() {
  var calculator = new Calculator();

  calculator.execute(new AddCommand(100));
  calculator.execute(new SubCommand(24));
  calculator.execute(new MulCommand(6));
  calculator.execute(new DivCommand(2));

  calculator.undo();
  calculator.undo();

  console.log("\nValue: " + calculator.getCurrentValue());
}

run();
