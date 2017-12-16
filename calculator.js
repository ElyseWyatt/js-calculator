//CALCULATOR:

//Our aim is to make our html and css calculator work.

document.addEventListener('DOMContentLoaded', function () {

//1. Event Listener
//this event listener goes first. It tells all the files to load all the html content before anymore JavaScript is run.

var answer = ""
var numbers = [];

//var buttons = document.getElementsByTagName("button");


//2. For each button, add an onclick event addEventListener. This works by attaching a listener to the button 'tags' in the html (anything with <button></button>). I could have used 'getElementsByClassName' also. This whole equation is selecting all button elements and saving into a variable with var buttons.

var buttons = document.getElementById('buttons').getElementsByTagName('button')

for (var i = 0; i < buttons.length; i++) {
   var button = buttons[i]
   button.addEventListener("click", handleClick)
}

function handleClick(e) {
   var value = e.target.value
  answer += e.target.value;
 document.getElementById('display').innerHTML = answer

 //if event target is "+" then don't add to array.

 if (e.target.value === '=') {
   var sum = Number(numbers[0]) + Number(numbers[1])
   document.getElementById('answer').innerHTML = sum;

 }

  if (value !== "+" && value !== "=") {
    numbers.push(value);
  }


}



// going to put getelementbyid then innerHTML

//var operators = ['+','-','x','%'];
//var decimalAdded = false;

//3. Value of button
//Now we want to make something happen when we click on the buttons. At the moment, when each button is clicked it is printing each number on the console. When I click 2, it prints 2. When I click 3, it then prints 23.




//Next:

//1. Print numbers to the console.


//2. Make an equation print out when numbers, then x, +, -, etc is selected.










//2. For each button, add an onclick event addEventListener
//use a for loop if you know how many things you need to loop through. If you didn't know how many elements, you'd use a while loop.
//e is an event.





//4. now when we print stuff
//concatenate - put stuff together.
//It wants to be in a string as potentially it will have + in there etc.
//update the display - need to substitute console.log onto the dom where the id = answer.






});
