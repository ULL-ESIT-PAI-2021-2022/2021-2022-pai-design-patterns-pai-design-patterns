/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @author Airam Rafael Luque Leon
 * @since Apr 07 2022
 * @desc This program exemplifies the strategy pattern for a shipping
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

/**
 * Class that represents the strategy A
 */
class ConcreteBillingStrategyA {
  /**
   * This function logs on the terminal that it is using the first strategy
   */
  calculate() {
    console.log("Calculating bill using first strategy");
  }
}

/**
 * Class that represents the strategy B
 */
class ConcreteBillingStrategyB {
  /**
   * This function logs on the terminal that it is using the second strategy
   */
  calculate() {
    console.log("Calculating bill using second strategy");
  }
}

/**
 * Class that give context to the strategys
 */
class BillingContext {
  /**
   * Receives an object of a class strategy
   * @param {object} strategy 
   */
  constructor(strategy) {
    this.strategy = strategy;
  }

  /**
   * Sets the strategy that it's been used
   * @param {object} strategy 
   */
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  /**
   * Calculates the bills given the set strategy
   */
  calculateBill() {
    this.strategy.calculate();
  }
}

/**
 * This function exemplifies the use of the strategy pattern
 */
function run() {
  const strategyA = new ConcreteBillingStrategyA();
  const strategyB = new ConcreteBillingStrategyB();

  const shipping = new BillingContext();

  shipping.setStrategy(strategyA);
  console.log('Strategy A' + shipping.calculate());

  shipping.setStrategy(strategyB);
  console.log('Strategy B' + shipping.calculate());
}

run();
