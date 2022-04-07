/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Helena Garcia Diaz
 * @author Airam Rafael Luque Leon
 * @since Apr 07 2022
 * @desc This program emulates the use of the original code of a cart service
 *       for a web
 * 
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-design-patterns-pai-design-patterns}
 */

'use strict';

import Cart from 'original_code';

function main() {
  const myCart = new Cart();
  const multiplication = myCart.operation(1, 2, 'multiplication');
  console.log(`The multiplication: ${multiplication}`);

  const division = myCart.operation(10, 2, 'division');
  console.log(`The division: ${division}`);
}

main();