console.log('CONNECTED');

//        SELECTORS SHOULD ALWAYS BE AT TOP OF DOC
const button = document.querySelector('#main-btn'); // targets button element on the DOM
const container = document.querySelector('#container');



// button.addEventListener('click', (event) => {   
//   console.log(`You clicked ${event.target.id}!`);
//   //console.log(event.altKey);     //altkey is from all the keys from object in DOM
//   // console.log(event); ==> when you console.log event, it will show object in DOM with all keys
// you can use 
// })


const whatIsTheId = (event) => {
  console.log(`You clicked ${event.target.id}`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON'; 
    //innerHTML will go to container element inside index.html and replace whatever is in there with
    // 'You clicked the MAIN BUTTON'    
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  }
  // this will show the phrase in the html page on the DOM (container)
}

button.addEventListener('click', whatIsTheId); // click is the event!!


// TARGET `other-btn` and on click, run whatIstheId

const otherButton = document.querySelector('#other-btn');
otherButton.addEventListener('click', whatIsTheId); 
