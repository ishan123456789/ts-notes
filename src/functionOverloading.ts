type Combinable = string | number;

function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + " " + b.toString();
  }
  return a + b;
}

// Now when you pass specific value types the return type is not combinable but specific
let sum = add(1, 2);
