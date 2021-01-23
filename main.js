console.log('CONNECTED');

const firstObj = {};

const user = {
  username: 'biz.marquie',
  password: 'abd123',
  lovesJavascript: true, 
  favoriteNumber: 42,
}


// DOT NOTATION 
console.log(user.lovesJavascript);
console.log(user.username);

// BRACKET NOTATION
console.log(user['password']); 
//if you are using brackets, value has to be a STRING

console.log(user['favoriteNumber']);
console.log(user.favoriteNumber);

// ASSIGNING VALUES

const newUser = {
  isNew: true,
}

newUser.username = 'fresh.prince'; // assigning with dot notation
console.log(newUser);

newUser['password'] = 'abcd1234'; // assigning with bracket notation 

const newObject = {
  username: 'Gabby',
  sayHello: function () {
    console.log(`${this.username} says hello!`);
  }
}

newObject.username = 'Aja'; // Reassigned value of username
newObject.sayHello(); //This is how you call the function inside object

// ITERATE OVER AN OBJECT

const userTwo = {
  username: 'trinity,christiana',
  password: 'xyz0987',
  lovesJavacsript: true,
  favoriteNumber: 12, 
}

for (let key in userTwo) {
  console.log(key);                // gives you all keys of objects
  console.log(userTwo[key]);       // gives you all the values
}
