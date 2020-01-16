function passCompute (length){
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
//console.log(passCompute(5));

function passGenerate (){
  var text = document.getElementById('passField');
  text.value = passCompute(5);
}

function passCopy (){
  /* Get the text field */
  var copyText = document.getElementById("passField");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied '" + copyText.value +"' to your Clipboard");
}