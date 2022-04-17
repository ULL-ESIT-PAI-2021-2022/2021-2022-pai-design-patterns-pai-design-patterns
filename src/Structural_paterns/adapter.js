/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @author Airam Rafael Luque Leon
 * @since Apr 07 2022
 * @desc This class is an adapter so the new code for the cart can be use as
 * the old one
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

import Cart from 'new_code.js';

/** The Adapter class */
class CartAdapter {
  /** Creates an object of the new cart class */
  constructor() {
    this.cart = new Cart();
  }

  /**
   * Calculates the operation given with the two numbers
   * @param {number} price
   * @param {number} item
   * @param {string} operation
   * @return {number} the result of the operation
   */
  operation(price, item, operation) {
    switch (operation) {
      case 'addition':
        return this.cart.addition(price, item);
      case 'multiplication':
        return this.cart.multiplication(price, item);
      case 'division':
        return this.cart.division(price, item);
      default:
        return NaN;
    }
  }
}

export default CartAdapter;
