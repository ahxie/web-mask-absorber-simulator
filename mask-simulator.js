


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

    var wavelength = +document.getElementById('wavelength').value;
    var phaseShift = +document.getElementById('phaseShift').value;

    // find index of material in drop down 
    var dropdown = document.getElementById('material-dropdown').value;
    var index = materialArray.indexOf(dropdown);

    // find corresponding delta 
    var delta = data[index].Delta;

    // determine real part of index of refraction 
    var n2 = 1 + delta;

    // define phase shift variable

    // convert phase shift value to radians if needed (not working)

    switch(document.getElementById('units').value){
      case 'radians':
        //phaseShift = document.getElementById('phaseShift').value;
      break
      case 'degrees':
        phaseShift *= Math.PI/180;
      break
      case 'waves':
        phaseShift = phaseShift*2*Math.PI;
      break
      default:
        console.log('(should never get here) No recognized units!')
    }

 

    // compute optimal thickness 
    const n1 = 1;
    var theta1 = 6*Math.PI/180;
    var theta2 = Math.asin(n1/n2*(Math.sin(theta1)));
    var d = phaseShift*wavelength/(4*Math.PI*(n1/Math.cos(theta1)-n2/Math.cos(theta2)));

    let counter = 0;
    while (d < 0) {
        phaseShift = phaseShift-(2*Math.PI);
        d = phaseShift*wavelength/(4*Math.PI*(n1/Math.cos(theta1)-n2/Math.cos(theta2)));
        counter = counter+1;

        // we should never get in this loop, it's only to prevent chrome from crashing
        if (counter>50){
          console.log('counter has reached 50!')
            break
        }
    }

    // display optimal thickness in text edit box (shows as negative?)
    document.getElementById('thickness').value = d;
}



document.addEventListener("DOMContentLoaded", function(){


  var select = document.getElementById('material-dropdown');
    
  // for(var i = 0; i < materialArray.length; i++) {
  //     var option = document.createElement('option')
  //     option.text = materialArray[i];
  //     select.add(option);
  // }


  // working with elements of array 
  materialArray.map( (material) =>{
    var option = document.createElement('option')
    option.text = material;
    select.add(option);
  })

 

  // map, filter, reduce




  // var squarer = function(x){
  //   return x*x;
  // }


  var myArray = [0, 1, 2, 3];
  var squaredArray = [];

  // // option 1 (for loop, "imperative")
  // for (var k = 0; k < myArray.length; k++){
  //   squaredArray[k] =squarer(myArray[k]);
  // }

  

  // // option 2 (no loop, "declarative")
  // squaredArray = myArray.map(squarer);

  // squaredArray = myArray.map(function(x){return x*x})



  // (x) => {
  //   console.log(x);
  //   return x*x
  // }


  // squaredArray = myArray.map((x) => x*x)
  // alert(squaredArray);

  // myArray.map((x) => {console.log(x)})
    
});





 

  