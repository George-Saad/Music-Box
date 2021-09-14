<img width="1440" alt="Screenshot 2021-09-14 at 12 48 32" src="https://user-images.githubusercontent.com/42983847/133244474-0c402d9e-ac72-40aa-81da-6d3a0fb58227.png">







Music Box

Is a simple music visualizer that displays gifs in time with the beat of a song.
The songs list is stored in a JSON file and presented for the user to choose from.
The user will also type in a theme for the visualization. This will be the search query you pass to the Giphy API.<br>
When the user has chosen a song and a theme, gifs retrieved from the Giphy API should be displayed in time with the kicks in the song.
The app uses dancer.js library to detect kicks in the song. Dancer.js is built natively in the browser using the Web Audio API.



<img width="1440" alt="Screenshot 2021-09-14 at 12 55 15" src="https://user-images.githubusercontent.com/42983847/133245379-a0aa6ca2-1275-4392-8c4c-52c89267d5ae.png">





This project is inspired by the see hear party Chrome experiment by Peter Javidpour. Also uses the https://github.com/yayinternet/hw4-starter.git repositry produced as a startup code for homework, which is explaned here: https://web.stanford.edu/class/archive/cs/cs193x/cs193x.1176/homework/4-musicbox#class-decomposition
