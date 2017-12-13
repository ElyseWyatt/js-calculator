//CALCULATOR:

//Our aim is to make our html and css calculator work.



//this event listener goes first. It tells all the files to load all the html content before anymore JavaScript is run.


//2. For each button, add an onclick event addEventListener
//3. Print out value of button
//document.AddEventListener  - document is referring to the html document.
//document.getElementsByTagName("button") - anything with the tag name button will be selected, so <button></button>. You could use ElementsByClassName also.


document.addEventListener('DOMContentLoaded', function () {
  //1. Select all button elements and save into a variable with var buttons.

  var answer = ""
  var buttons = document.getElementsByTagName("button");

//2. For each button, add an onclick event addEventListener
//use a for loop if you know how many things you need to loop through. If you didn't know how many elements, you'd use a while loop.
//e is an event.

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
  button.addEventListener("click", function(e) {
    answer = answer + e.target.value;
    console.log(answer)
  }

)}



//4. now when we print stuff
//concatenate - put stuff together.
//It wants to be in a string as potentially it will have + in there etc.
//update the display - need to substitute console.log onto the dom where the id = answer.






});
