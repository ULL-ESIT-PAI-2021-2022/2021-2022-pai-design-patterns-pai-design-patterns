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
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

/**
 * This function sums two numbers and returns the result
 * @param {number} number1
 * @param {number} number2
 * @return {number} the sum of the two numbers
 */
function addition(number1, number2) {
  return number1 + number2;
}

/**
 * This function subtract two numbers and returns the result
 * @param {number} number1
 * @param {number} number2
 * @return {number} the subtraction of the two numbers
 */
function substraction(number1, number2) {
  return number1 - number2;
}

/**
 * This function multiplies two numbers and returns the result
 * @param {number} number1
 * @param {number} number2
 * @return {number} the multiplication of the two numbers
 */
function multiplication(number1, number2) {
  return number1 * number2;
}

/**
 * This function divides two numbers and returns the result
 * @param {number} number1
 * @param {number} number2
 * @return {number} the division of the two numbers
 */
function division(number1, number2) {
  return number1 / number2;
}

/** Class that represents a command */
class Command {
  /** Creates the command
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
 * This function encapsulates the Addition operation
 * @param {number} value
 * @return {number} the value of the operation
 */
const AdditionCommand = function(value) {
  return new Command(addition, substraction, value);
};

/**
 * This function encapsulates the subtract operation
 * @param {number} value
 * @return {number} the value of the operation
 */
const SubstractionCommand = function(value) {
  return new Command(substraction, addition, value);
};

/**
 * This function encapsulates the multiplicacion operation
 * @param {number} value
 * @return {number} the value of the operation
 */
const MultiplicationCommand = function(value) {
  return new Command(multiplication, division, value);
};

/**
 * This function encapsulates the division operation
 * @param {number} value
 * @return {number} the value of the operation
 */
const DivisionCommand = function(value) {
  return new Command(division, multiplication, value);
};

/**
 * This emulates a calculator that can undo
 * operations
 * @return {number} the value of the operation
 */
const Calculator = function() {
  let current = 0;
  const commands = [];

  /**
   * This funciton receives a command function and return the name of
   * the given command
   * @param {function} command
   * @return {string} the name of the command
   */
  function action(command) {
    const name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    /**
     * This function executes the given command
     * @param {function} command
     */
    execute: function(command) {
      current = command.execute(current, command.value);
      commands.push(command);
      console.log(action(command) + ': ' + command.value);
    },

    /**
     * This funciton pops the last command and
     * executes the reverse action
     */
    undo: function() {
      const command = commands.pop();
      current = command.undo(current, command.value);
      console.log('Undo ' + action(command) + ': ' + command.value);
    },

    /**
     * This function return the current value on the calculator
     * @return {number} the current value
     */
    getCurrentValue: function() {
      return current;
    },
  };
};

/**
 * This function creates a new calculator, executes a few commands, undo the
 * last two and tells the current value on the calculator
 */
function run() {
  const calculator = new Calculator();

  calculator.execute(new AdditionCommand(100));
  calculator.execute(new SubstractionCommand(24));
  calculator.execute(new MultiplicationCommand(6));
  calculator.execute(new DivisionCommand(2));

  calculator.undo();
  calculator.undo();

  console.log('\nValue: ' + calculator.getCurrentValue());
}

run();
