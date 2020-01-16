// Password length slider
var sliderValue = 15
var slider = document.getElementById("passRange")
var output = document.getElementById("passLength")
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value
  sliderValue = this.value
}

// Checkbox default states
var numericalCheck = true
var lowercaseCheck = true
var capitalCheck = true
var specialCheck = false

function passNumerical() {
  if (document.getElementById('numerical').checked) {
    numericalCheck = true
  } else if (numericalCheck === true) {
    //document.getElementById('numerical').checked = false
    numericalCheck = false
  }
  // console.log('Numbers:' + numericalCheck)
}

function passLowercase() {
  if (document.getElementById('lowercase').checked) {
    lowercaseCheck = true
  } else if (lowercaseCheck === true) {
    lowercaseCheck = false
  }
  // console.log('Lowercase:' + lowercaseCheck)
}

function passCapital() {
  if (document.getElementById('capital').checked) {
    capitalCheck = true
  } else if (capitalCheck === true) {
    capitalCheck = false
  }
  // console.log('Capitals:' + capitalCheck)
}

function passSpecial() {
  if (document.getElementById('special').checked) {
    specialCheck = true
  } else if (specialCheck === true) {
    specialCheck = false
  }
  // console.log('Special:' + specialCheck)
}

function passCompute (length){
  var result           = ''
  var characters       = ''
  if (numericalCheck === true) {
    addNumbers = "0123456789"
    var characters = characters.concat(addNumbers)
  }
  if (lowercaseCheck === true) {
    addLowercase = "abcdefghijklmnopqrstuvwxyz"
    var characters = characters.concat(addLowercase)
  }
  if (capitalCheck === true) {
    addCapitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var characters = characters.concat(addCapitals)
  }
  if (specialCheck === true) {
    addSpecials = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
    var characters = characters.concat(addSpecials)
  }
  var charactersLength = characters.length
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  if (numericalCheck === false && lowercaseCheck === false && capitalCheck === false && specialCheck === false){
    return '[ERROR] No character type has been selected'
  } else {
    return result
  }
}
//console.log(passCompute(5));

function passGenerate (){
  var text = document.getElementById('passField')
  text.value = passCompute(sliderValue)
}

function passCopy (){
  /* Get the text field */
  var copyText = document.getElementById("passField")

  /* Select the text field */
  copyText.select()
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy")

  /* Alert the copied text */
  alert("Copied '" + copyText.value +"' to your Clipboard")
}
