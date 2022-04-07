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
 * @see {@link https://refactoring.guru/es/design-patterns/singleton/typescript/example}
 */

/**
 * The Singleton class defines the `getInstance` method that lets clients
 * access the unique singleton instance.
 */
class Singleton {
  private static instance: Singleton;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   * @return {Object} The unique instance of the Singleton class.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
    console.log('¡I\'m a Singleton!');
  }
}

/**
 * Main function of the program. This function try to creates two instances of
 * the class and then check if they are the same instance
 */
function main() {
  const firstInstance = Singleton.getInstance();
  const secondInstance = Singleton.getInstance();

  if (firstInstance === secondInstance) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

main();
