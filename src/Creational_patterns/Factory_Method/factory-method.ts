/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Airam Rafael Luque León
 * @since April 01 2021
 * @desc This program implements a basic example of the factory method pattern
 * in TypeScript.
 * @see {@link https://refactoring.guru/design-patterns/factory-method/typescript/example}
 */

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class Creator {
  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   */
  public abstract factoryMethod(): Product;

  /**
   * The Creator's primary responsibility is not creating products. Usually, it
   * contains some core business logic that relies on Product objects, returned
   * by the factory method. Subclasses can indirectly change that business
   * logic by overriding the factory method and returning a different type of
   * product from it.
   * @return {String} A string describing the steps taken by the creator
   */
  public someOperation(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    let resultString = `Creator: The same creator's code has just worked with`;
    resultString += ` ${product.operation()}`;
    return resultString;
  }
}

/**
* Concrete Creators override the factory method in order to change the
* resulting product's type.
*/
class ConcreteCreator1 extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   * @return {Product} A new instance of a Product object.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ConcreteCreator2 extends Creator {
  /**
   * 
   * @return {Product} A new instance of a Product object.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/**
* The Product interface declares the operations that all concrete products must
* implement.
*/
interface Product {
  operation(): string;
}

/**
 * First concrete product class declaration
 */
class ConcreteProduct1 implements Product {
  /**
   * This function returns a string describing the product.
   * @return {String} A string describing the product.
   */
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

/**
 * Second concrete product class declaration
 */
class ConcreteProduct2 implements Product {
  /**
   * This function returns a string describing the product.
   * @return {String} A string describing the product.
   */
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}

/**
* The client code works with an instance of a concrete creator, albeit through
* its base interface. As long as the client keeps working with the creator via
* the base interface, you can pass it any creator's subclass.
* @param {Creator} creator An instance of a creator object.
*/
function clientCode(creator: Creator) {
  let resultString ='Client: I\'m not aware of the creator\'s';
  resultString += ' class, but it still works.';
  console.log(resultString);
  console.log(creator.someOperation());
}

/**
* The Application picks a creator's type depending on the configuration or
* environment.
*/
function runFactory() {
  console.log('App: Launched with the ConcreteCreator1.');
  clientCode(new ConcreteCreator1());
  console.log('');

  console.log('App: Launched with the ConcreteCreator2.');
  clientCode(new ConcreteCreator2());
}

runFactory();
