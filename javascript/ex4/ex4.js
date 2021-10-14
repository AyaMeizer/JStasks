let fontfam = document.getElementById("font1");
let text = document.getElementById("text")
let italic = document.getElementById("italic");
let bold = document.getElementById("bold");
let underline = document.getElementById("underline");
let fontsize = document.getElementById("fontsize");

fontfam.addEventListener('change', function(){
    let font1 = fontfam.value;
    if (font1== 'Arial') {
        text.style.fontFamily = 'Arial';
    } else if (font1 == 'Times New Roman') {
    text.style.fontFamily = 'Times New Roman';
    } else if (font1 == 'Courier New') {
        text.style.fontFamily = 'Courier New';
    }
    else {
        text.style.fontFamily ="" ;
    }
})
fontsize.addEventListener('change', function(){
    let value = fontsize.value;
    if (value== '12px') {
        text.style.fontSize = '12px';
    } else if (value == '18px') {
        text.style.fontSize = '18px';
    } else if (value == '22px') {
        text.style.fontSize = '22px';
    }
    else {
        text.style.fontSize ="" ;
    }
})
italic.addEventListener('click', function(){
    if (italic.checked) {
text.style.fontStyle="italic";
    }
    else{
text.style.fontStyle="normal";
    }
})
bold.addEventListener('click', function(){
    if (bold.checked) {
text.style.fontWeight="bold";
    }
    else{
text.style.fontWeight="normal";
    }
})
underline.addEventListener('click', function(){
    if (underline.checked) {
text.style.textDecoration="underline";
    }
    else{
text.style.textDecoration="none";
    }
})