console.log('CONNECTED');

const sentence1 = (name) => {
  return `My name is ${name}`;
}

const sentence2 = (name) => {
  return `Hello ${name}`;
}


// TAKES A FUNCTION AS AN ARGUMENT
const greeting = (name, cb) => {     // cb stands for callback function
  return cb(name);                   
}

//    CONSOLE LOGGING THE RETURN STATEMENTS OF EACH CALLBACK
console.log(greeting('Gabby', sentence1));
console.log(greeting('Gabby', sentence2));
