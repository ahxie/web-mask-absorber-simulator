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

    // find corresponding delta 
    var delta = data[index].Delta;

    // determine real part of index of refraction 
    var n2 = 1 + delta;

    // define phase shift variable
    var phaseShift = document.getElementById('phaseShift').value;

    // convert phase shift value to radians if needed (not working)
    if (document.getElementById('units').value === 'Radians') {
        phaseShift = document.getElementById('phaseShift').value;
    }  else if (document.getElementById('units').value === 'Degrees') {
        phaseShift = document.getElementById('phaseShift').value*Math.PI/180;
    } else if (document.getElementById('units') === 'Waves') {
        phaseShift = document.getElementById('phaseShift').value*2*Math.PI;
    }

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



 

  