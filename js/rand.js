var path = '/media/songs/',
    files = ['arc.mp3', 'etc.mp3', 'pop.mp3'],
    songnames = ["Live Fast Die Young(Extended Mix) - Anubasu-anubasu", 'Close to the Heavens - Masayoshi Soken','㋰責任集合体 - マサラダ']
    i = Math.floor(Math.random()*files.length);
var url = (path+files[i]);

document.getElementById(
    "np"
).innerHTML =
    "Now playing: " + songnames[i];

document.getElementById("player").innerHTML =
    "<source src=" + url +" type=\"audio/mp3\">"