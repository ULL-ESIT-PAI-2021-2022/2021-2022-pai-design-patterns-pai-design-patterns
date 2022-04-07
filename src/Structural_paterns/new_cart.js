/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @author Airam Rafael Luque Leon
 * @since Apr 07 2022
 * @desc This program emulates the new code of a cart service for a web
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

/**
 * A cart class that has a few mathematical operations
 */
class Cart {
  /**
   * Adds two numbers and return the result
   * @param {number} price 
   * @param {number} item 
   * @return {number} the result
   */
  add(price, item) {
    return price + item;
  }

  /**
   * Divides two numbers and return the result
   * @param {number} price 
   * @param {number} item 
   * @return {number} the result
   */
  div(price, item) {
    return price / item;
  }

  /**
   * Multiplies two numbers and return the result
   * @param {number} price 
   * @param {number} item 
   * @return {number} the result
   */
  mult(price, item) {
    return price * item;
  }
}

export default Cart;
