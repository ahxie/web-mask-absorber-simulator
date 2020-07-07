// This is a comment in JS

/*
    This is a block comment in JS
*/


function doThisWhenButtonIsClicked(){
    alert('Clicked!')


    // This is how you grab info from another html element using its id:
    var textFieldValue = document.getElementById('my-text-box').value;


    alert('The value of the text box is: ' + textFieldValue);

    // Change the value of the HTML inside the last paragraph:
    document.getElementById('identifiable-paragraph').innerHTML = 'Our textbox says: ' + textFieldValue;
  
}