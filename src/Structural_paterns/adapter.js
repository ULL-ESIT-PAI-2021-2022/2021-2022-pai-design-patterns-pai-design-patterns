/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @author Airam Rafael Luque Leon
 * @since Apr 07 2022
 * @desc This class is an adapter so the new code for the cart can be use as the old one
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

import Cart from 'new_code.js';

class CartAdapter {
  constructor() {
    this.cart = new Cart();
  }

  operation(price, item, operation) {
    switch(operation) {
      case 'add':
        return this.cart.add(price, item);
      case 'multiplication':
        return this.cart.mult(price, item);
      case 'division':
        return this.cart.div(price, item);
      default:
        return NaN;
    }
  }
}

export default CartAdapter;