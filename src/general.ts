/**
 * never return type just like void
 * Happens in case of error thrown or infinite loop in function
 */
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}
// generateError("An error occurred!", 500);

/**
 * unknown type
 * It's possible to assign value to variable of type unknown
 * But not possible to assign value of unknown variable to typed one
 */
let x: unknown;
let y: string;

x = null; // works
// y = x; // Throws error Type 'unknown' is not assignable

/**
 * Function type
 * If return type is void and we return something it keeps working as expected
 */
let myFunc: () => void;
myFunc = () => {
  return "hello"; // Works as expected although expected return type is void
};

/**
 * Type literals
 * We can specify some values instead of using enums as well
 */
let gender: "male" | "female"; // Will throw error if anything else is being assigned

/**
 * Type aliasing
 * Can be used for creating commonly used types
 */
type Genders = "male" | "female";
