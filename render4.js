

document.onreadystatechange = function(){
    if(document.readyState === 'complete'){
        var keyb = document.getElementById("keypad")
        var keybo = keyb.querySelector("#kopet")
        var keybooo = keybo.contentDocument.getElementById("keyboard").getElementsByTagName("li")
        var txtarea = document.getElementById("write")
        console.log(keybooo)
        for (i = 0; i < keybooo.length; i++) 
            {
                console.log(keybooo[i]);
                keybooo[i].addEventListener('click',function(event){
                    if(this.textContent == "del")
                        {
                            if(txtarea.textContent!=null)
                                {
                                    txtarea.textContent = txtarea.textContent.substr(0,txtarea.textContent.length-1);
                                }
                        }
                    else if(this.textContent == "delAll")
                        {
                            if(txtarea.textContent!=null)
                                {
                                    txtarea.textContent = null;
                                }
                        }
                    else {txtarea.textContent += this.innerText;}
                });
            }

    }
}