let choice = document.getElementById("select");
let placeholder = document.getElementById("placeholder");
function bgimg(){
  let value = choice.value;
  if(value=="palestine"){
      placeholder.style.backgroundImage = "url(palestine.png)"; 
  }
 else if(value=="iraq"){
    placeholder.style.backgroundImage = "url(iraq.png)"; 

  }
  else if (value=="jordan"){
    placeholder.style.backgroundImage = "url(jordan.png)"; 

  }
  else{
    placeholder.style.backgroundImage = "url(placeholder.png)"; 
    
  }
}