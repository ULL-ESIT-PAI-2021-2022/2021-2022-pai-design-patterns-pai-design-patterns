/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @author Airam Rafael Luque Leon
 * @since Apr 07 2022
 * @desc This program emulates the original code of a cart service for a web
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

class Cart {
  operation(price, item, theOperation) {
    switch (theOperation) {
      case 'multiplication':
        return price * item;
      case 'division':
        return price / item;
      default:
        return NaN;
    }
  }
}

export default Cart;
