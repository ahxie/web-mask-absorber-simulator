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

// make array of materials 

var materialArray = [];

for (i = 0; i < data.length; i++) {
    materialArray.push(data[i].Material);
}

// what i want to do: find index of materials drop down and then use that to find delta 

// make a function to find optimal thickness after button is clicked 

function determineThickness() {
    // find index of material in drop down 
    var dropdown = document.getElementById('select').value;
    var index = materialArray.indexOf(dropdown);
    console.log(dropdown);
    console.log(index);

    // find corresponding delta 
    var delta = data[index].Delta;

    // determine real part of index of refraction 
    var n2 = 1 + delta;

    // define phase shift variable
    let phaseShift = document.getElementById('phaseShift').value;

    // convert phase shift value to radians if needed (not working)
    var units = document.getElementById('units').value;
    if (units === 'Radians') {
        phaseShift = phaseShift;
    } else if (units === 'Degrees') {
        phaseShift = phaseShift*Math.PI/180;
    } else if (units === 'Waves') {
        phaseShift = phaseShift*2*Math.PI;
    }

    console.log(phaseShift);

    // compute optimal thickness 
    const n1 = 1;
    var theta1 = 6*Math.PI/180;
    var theta2 = Math.asin(n1/n2*(Math.sin(theta1)));
    var d = phaseShift*document.getElementById('wavelength').value/(4*Math.PI*(n1/Math.cos(theta1)-n2/Math.cos(theta2)));

    let counter = 0;
    while (d < 0) {
        phaseShift = phaseShift-(2*Math.PI);
        phaseShift*document.getElementById('wavelength').value/(4*Math.PI*(n1/Math.cos(theta1)-n2/Math.cos(theta2)));
        counter = counter+1;
        if (counter>50) 
            break
    }

    // display optimal thickness in text edit box (shows as negative?)
    document.getElementById('thickness').value = d;
}



