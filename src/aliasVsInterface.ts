/**
Difference between type alias and interface is that type alias can have 
Non object as well
 */

// Interface extends interface
{
  interface PartialPointX {
    x: number;
  }
  interface Point extends PartialPointX {
    y: number;
  }
}
// Type alias extends type alias
{
  type PartialPointX = { x: number };
  type Point = PartialPointX & { y: number };
}
// Interface extends type alias
{
  type PartialPointX = { x: number };
  interface Point extends PartialPointX {
    y: number;
  }
}
// Type alias extends interface
interface PartialPointX {
  x: number;
}
type Point = PartialPointX & { y: number };

// A class can implement an interface or type alias, both in the same exact way.

{
  interface Point {
    x: number;
    y: number;
  }

  class SomePoint implements Point {
    x = 1;
    y = 2;
  }
}
{
  type Point2 = {
    x: number;
    y: number;
  };

  class SomePoint2 implements Point2 {
    x = 1;
    y = 2;
  }
}

/**
 * Extending
 */
// Interface extends interface
{
  interface PartialPointX {
    x: number;
  }
  interface Point extends PartialPointX {
    y: number;
  }
}
// Type alias extends type alias

{
  type PartialPointX = { x: number };
  type Point = PartialPointX & { y: number };
}

// Interface extends type alias

{
  type PartialPointX = { x: number };
  interface Point extends PartialPointX {
    y: number;
  }
}
// Type alias extends interface

{
  interface PartialPointX {
    x: number;
  }
  type Point = PartialPointX & { y: number };
}
