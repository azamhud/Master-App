/*function load_keypad()
{
  document.getElementById("keypad").innerHTML = '<object id="kopet" data="./extend/Keypad.html" width="186px" height="251px" ></object>';
}

/*$('#keyboard li').click(function(){
    var $this = $(this),
        character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
     
    //$write.html($write.html() + character);
    // Code for processing the key.
//});*/
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const newWindowBtn1 = document.getElementById('btnBatal')

newWindowBtn1.addEventListener('click', function (event) {
    const windw = BrowserWindow.getAllWindows();
    const modalPath = path.join('file://', __dirname, '/Warning.html')
    windw[0].loadURL(modalPath)
    windw[0].show()
})
