function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function ex2b(){
    const change = document.getElementById("colors");
    let set = ["red", "green", "blue","yellow","black","pink","gold","orange","purple"];
    change.style.backgroundColor = set [getRandomInt(9)];
   
}