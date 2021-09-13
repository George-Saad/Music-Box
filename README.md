Music Box

Is a simple music visualizer that displays gifs in time with the beat of a song.
The songs list is presented for the user to choose from. The song list is stored in a JSON file.
The user will also type in a theme for the visualization. This will be the search query you pass to the Giphy API.
When the user has chosen a song and a theme, gifs retrieved from the Giphy API should be displayed in time with the kicks in the song.
The AudioPlayer class uses an Audio element for audio playback and the dancer.js library to detect kicks in the song. Dancer.js is built natively in the browser using the Web Audio API.


This project is inspired by the see hear party Chrome experiment by Peter Javidpour. Also uses the https://github.com/yayinternet/hw4-starter.git repositry produced as a startup code for homework, which is explaned here: https://web.stanford.edu/class/archive/cs/cs193x/cs193x.1176/homework/4-musicbox#class-decomposition
