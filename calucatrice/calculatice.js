
// les variables //
 var screen=document.getElementById("screen");
 var numChar;
 var curenteChar,prevousChar;
 var operations=['+','-','*','/','.'];



 
// les fonctions//
function clearscreen(){
    screen.value="";
}
function deplay(c){
    screen.value +=c;
    numChar=screen.value.length;
    curenteChar=c
   /* console.log("current:"+curenteChar);*/
   getprevousChar();


}
function calculate(){
    screen.value=eval( screen.value)
}
function getprevousChar(){
    prevousChar=screen.value.substring(numChar-2,numChar-1);
  /*  console.log("prev"+prevousChar);
    console.log("prev"+curenteChar);*/
    cheksyntaxe();
}
function cheksyntaxe(){
    if(operations.includes(curenteChar)&& numChar==1){
        romovecar();
    }
    if(operations.includes(prevousChar)&& operations.includes(curenteChar)){
        alert("same carcterse twice");
        if(prevousChar==curenteChar){
            romovecar();

        }else{
            overite();
        }
    }
}
function overite(){
    screen.value=screen.value.slice(0,numChar-2)+ screen.value.slice(numChar-1);

}

function romovecar(){
    screen.value=screen.value.substring(0,numChar-1);
}