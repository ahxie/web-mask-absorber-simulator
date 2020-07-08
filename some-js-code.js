// This is a comment in JS

/*
    This is a block comment in JS
*/

var data = JSON.parse(`[
    {
      "Material": "Al",
      "Delta": -0.00277082226,
      "Beta": 0.0296398792
    },
    {
      "Material": "Mo",
      "Delta": 0.0758321136,
      "Beta": 0.00637703808
    },
    {
      "Material": "Ni",
      "Delta": 0.051712382,
      "Beta": 0.0724597648
    },
    {
      "Material": "Pd",
      "Delta": 0.123430364,
      "Beta": 0.0459074862
    },
    {
      "Material": "Ru",
      "Delta": 0.113057777,
      "Beta": 0.0168291703
    },
    {
      "Material": "TaN",
      "Delta": 0.0612390861,
      "Beta": 0.037667539
    }
  ]`)

function doThisWhenButtonIsClicked(){
    console.log('Clicked!')


    // This is how you grab info from another html element using its id:
    var textFieldValue = document.getElementById('my-text-box').value;
    
 
    console.log('The value of the text box is: "' + textFieldValue + '"');

   
    var s3 = `my text field value is "${textFieldValue}"`;



    console.log(s3)

    // Change the value of the HTML inside the last paragraph:
    document.getElementById('identifiable-paragraph').innerHTML = s3;
  
}



