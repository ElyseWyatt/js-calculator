//CALCULATOR:

//Our aim is to make our html and css calculator work


document.addEventListener('DOMContentLoaded', function () {

//Event Listener
//This event listener goes first, and tells all the files to load all the html content before anymore JavaScript is run.

var answer = ''
var numbers = []
var operator = ''

//This is defining answer as a variable.
//This is defining numbers as an array.

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


    if (e.target.value === '=') {
      var result = getResult()
      document.getElementById('answer').innerHTML = result;
    }

    if (isNumber(value)) {
      numbers.push(Number(value));
    } else {
      operator = value
    }
}


function isNumber(char) {
  if (char === '+') return false
  if (char === '-') return false;
  if (char === '*') return false;
  if (char === '/') return false;
  if (char === '=') return false;
  var num = Number(char)
  return !isNaN(num)
}

function getResult () {
  if (operator === '+') {
    return numbers[0] + numbers[1]
  }
  if (operator === '-') {
    return numbers[0] - numbers[1]
  }
  if (operator === '*') {
    return numbers[0] * numbers[1]
  }
  if (operator === '/') {
    return numbers[0] / numbers[1]
  }

}



// This prints the equation to the box once the = symbol is selected! If = is selected, print number + number to the 'answer' html tag.

//if event target is "+" then don't add to array.


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
