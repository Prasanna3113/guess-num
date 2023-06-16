var s="";
var c=0;
const random=Math.floor(Math.random() *100);
document.getElementById("ch").onclick = function(){
    var a=parseInt(document.getElementById("chk").value);
    
    if(a>random){
            c=c+1;
            s="Try lesser numbers";
            document.getElementById("check").textContent = s;
    }
    else if(a<random){
        c=c+1;
        s="Try Greater numbers";
        document.getElementById("check").textContent = s;
    }
    
    else if(a==random){
        c=c+1;
        s= "Congratulation's, You Guessed it correctly in "+c+" tries.";
        document.getElementById("check").textContent = s;
    }
}
