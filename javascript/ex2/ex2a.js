let i = 0;
function ex2(){
    const change = document.getElementById("colors");
    let set = ["red" , "green", "blue"];
    while(i<=2){
    change.style.backgroundColor = set [i];
    i++;
    break
}
if(i>2){
    i=0;
}
}