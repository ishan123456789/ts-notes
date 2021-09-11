/**
Ts allows creating tuple like defining an array of type [number, string]; would throw an error in case anything is added or removed
*/
let role: [number, string] = [2,'admin'];
role.push(2); // results in an error
