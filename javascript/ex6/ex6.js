let show = document.getElementById('show');
let hide = document.getElementById('hide');
let text = document.getElementById('text');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');


let showBtn = document.getElementById('showBtn');
let showBtn1 = document.getElementById('showBtn1');
let showBtn2 = document.getElementById('showBtn2');


let hideBtn = document.getElementById('hideBtn');
let hideBtn1 = document.getElementById('hideBtn1');
let hideBtn2 = document.getElementById('hideBtn2');



showBtn.addEventListener('click', function() {
    showBtn.style.display='none';
    text.style.display = 'block';
});

hideBtn.addEventListener('click', function() {
    showBtn.style.display='block';
    text.style.display = 'none';
});

showBtn1.addEventListener('click', function() {
    showBtn1.style.display='none';
    text1.style.display = 'block';
});

hideBtn1.addEventListener('click', function() {
    showBtn1.style.display='block';
    text1.style.display = 'none';
});

showBtn2.addEventListener('click', function() {
    showBtn2.style.display='none';
    text2.style.display = 'block';
});

hideBtn2.addEventListener('click', function() {
    showBtn2.style.display='block';
    text2.style.display = 'none';
});