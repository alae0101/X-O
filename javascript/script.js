var char = "X";

function play(x) {
    
    
    tC=x.childNodes[1].innerText
    if (x.childNodes[1].innerText === ""&& stat) {
        x.childNodes[1].innerText = char
        x.style.cursor="default";

        x.classList.remove('square-hvr')



        

        items = document.getElementsByClassName("value")
         if((items[0].innerText===items[1].innerText && items[1].innerText===items[2].innerText)&&items[0].innerText!==""){
            stop()
        }else
            if((items[3].innerText===items[4].innerText && items[4].innerText===items[5].innerText)&&items[5].innerText!==""){
                stop()
                
            }else
                if((items[6].innerText===items[7].innerText && items[7].innerText===items[8].innerText)&&items[8].innerText!==""){
                    stop()
                    
                }else
                    if((items[0].innerText===items[3].innerText && items[3].innerText===items[6].innerText)&&items[6].innerText!==""){
                        stop()
                        
                    }else
                        if((items[1].innerText===items[4].innerText && items[4].innerText===items[7].innerText)&&items[7].innerText!==""){
                            stop()
                            
                        }else
                            if((items[2].innerText===items[5].innerText && items[5].innerText===items[8].innerText)&&items[8].innerText!==""){
                                stop()
                                
                            }else
                                if((items[0].innerText===items[4].innerText && items[4].innerText===items[8].innerText)&&items[8].innerText!==""){
                                    stop()
                                    
                                }else
                                    if((items[2].innerText===items[4].innerText && items[4].innerText===items[6].innerText)&&items[6].innerText!==""){
                                        stop()
                                        
                                    }

        if (char === "X" && stat ) {
            char = "O";
            document.getElementById("instruction").innerText = `${char.toLowerCase()} turn`;
        } else if (char === "O" && stat ) {
            char = "X";
            document.getElementById("instruction").innerText = `${char.toLowerCase()} turn`;
        }

        
    }
    
}

function reset() {

    // for (let i = 0; i < document.getElementsByClassName("value").length; i++) {
        // document.getElementsByClassName("value").item(i).innerText = "";
        // char = "X";
        // document.getElementById("instruction").innerText = `${char.toLowerCase()} turn`;
    // }
        location.reload()


}
stat = true
function stop(){
    stat = false
    els =  document.getElementsByClassName("square");
    for(let i = 0; i < els.length; i++){
        els[i].style.cursor="default";
        els[i].classList.remove('square-hvr')
        document.getElementById("instruction").innerText = `${char.toLowerCase()} victory`
    }

}




