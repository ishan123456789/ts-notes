/**
Using type check when multiple types are possible
*/
type RandomType = string | number | boolean;

type RandomType2 = {
  x: string;
};
type RandomType3 = {
  y: string;
};

function randomFunc(argument: RandomType): string {
  // We can consider instanceOf when using class
  if (typeof argument === "string") {
    return argument;
  }
  return argument.toString();
}
function randomFunc2(argument: RandomType2 | RandomType3): string {
  // We can consider instanceOf when using class
  if ("x" in argument) {
    return argument.x;
  }
  return argument.y;
}

/**
 * To discriminate union we can add additional property
 * A literal value
 */
type dog = {
  kind: "walking";
  walk: () => void;
};
type lizard = {
  kind: "crawling";
  crawl: () => void;
};
const moveAnimal = (animal: dog | lizard) => {
  switch (animal.kind) {
    case "crawling":
      animal.crawl();
      break;
    case "walking":
      animal.walk();
      break;
  }
};
