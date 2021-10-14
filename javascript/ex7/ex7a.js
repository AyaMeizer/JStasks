let add = document.getElementById('addBtn');

let playlist = document.getElementById('playlist');
let input = document.getElementById("songName");
add.addEventListener('click', function() {
    if(input.value !== "" ){
    let newSong = document.createElement('h3');
        let songName=document.getElementById("songName");
    playlist.style.display = 'block';
    playlist.appendChild(newSong);
    newSong.innerHTML = songName.value;
    }
    
});