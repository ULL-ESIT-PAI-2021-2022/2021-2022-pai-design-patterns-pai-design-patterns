/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @author Airam Rafael Luque Leon
 * @since Apr 07 2022
 * @desc This program uses the new code of a car service for a web, using
 *       the adapter so it can emulates the old code of the cart
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

import Cart from './new_cart';
import CartAdapter from './adapter';

/** This function exemplifies the use of the adapter pattern */
function main() {
  const myCartAdapter = new CartAdapter();
  const mySumAdapter = myCartAdapter.operation(2, 2, 'multiplication');
  console.log(`The sum made with the adapter: ${mySumAdapter}`);

  const myCart = new Cart();
  const mySum = myCart.multiplication(2, 2);
  console.log(`The sum with the new code: ${mySum}`);
}

main();
