/**
A generic type is a generic class or interface that is parameterized over types
 */
{
  const x: Array<null> = [];
  const y: Promise<null> = Promise.resolve(null);
  //   here both x, y are array, promise of null where array, promise are generics
  function mergeObj<T, U>(a: T, b: U) {
    // Auto returns: T & U
    return Object.assign(a, b);
  }
}
/**
 * Constraint restricting type of generic
 */
{
  // Can extends number, string whatever we want to limit to
  function mergeObj<T extends object, U extends object>(a: T, b: U) {
    // Auto returns: T & U
    return Object.assign(a, b);
  }
}
/**
 * If generic extends custom type this enforces the specified properties exists also allows additional props
 */
{
  interface LengthProp {
    length: number;
  }
  function getLength<T extends LengthProp>(prop: T) {
    return prop.length;
  }
  //   getLength(10); error .length doesn't exist
  getLength([]);
  getLength("fdsf");
}
/**
Constraint allows using first arg type in second arg
 */
{
  function getKeyValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
  }
}

/**
 * Generic with class
 */
{
  class RandomClass<T> {
    data: T[] = [];
    get(): T {
      return this.data[0];
    }
  }
}

/**
 * Generic utils:
 */
{
  const x: Partial<{ a: string; b: string }> = {};
  const y: Readonly<string[]> = ["a"];
  //   y.push(2); throws since readonly
  console.log(y);
}
