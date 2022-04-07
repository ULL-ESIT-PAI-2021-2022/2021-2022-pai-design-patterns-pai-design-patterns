/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Airam Rafael Luque León
 * @since April 01 2021
 * @desc This program implements basic example of the singleton pattern in
 * JavaScript.
 * @see {@link https://www.dofactory.com/javascript/design-patterns/singleton}
 * @see {@link https://www.digitalocean.com/community/tutorials/js-js-singletons}
 */

'use strict';

/**
 * This class implements the singleton pattern.
 */
const Singleton = (() => {
  let instance;

  /**
   * Create an instance of an object
   * @return {Object} The object that is being created.
   */
  function createInstance() {
    const object = new Object('I am the instance');
    return object;
  }

  // If the instance is not created yet, create it. Else return the instance.
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();


/**
 * Main function of the program. In this function we will create two instances
 * of an object and compare them.
 */
function run() {
  const firstInstance = Singleton.getInstance();
  const secondInstance = Singleton.getInstance();

  console.log('Same instance? ' + (firstInstance === secondInstance));
}

run();
