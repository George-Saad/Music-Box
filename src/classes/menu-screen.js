
import DOMUtils from "../DOMUtils.js";
import { SONG_SELECTOR_ID, QUERY_INPUT_ID, QUERY_COMPLETE_EVENT } from '../constants.js'

const utils = new DOMUtils();

export default class MenuScreen {

  #container;
  #songsListContainer;
  #themeInput;
  #goButton;

  constructor(container) {
    this.#container = container;
    this.#songsListContainer =  utils.getDOMElement(SONG_SELECTOR_ID);
    this.#populateSongSelector(this.#songsListContainer);

    this.#themeInput = utils.getDOMElement(QUERY_INPUT_ID);
    this.#generateTheme();
    
    this.#goButton = this.#container.querySelector("input[value=Go]");
    this.#goButton.addEventListener('click', this.#_onSubmit);
  
  }

  fetchData = async (url)=> {
    const response = await fetch(url);
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    } else {
      throw new Error('HTTP ERROR ' + response.status);
    }
  }

  #populateSongSelector = async (songsListContainer)=> {
    try {
      const songs = await this.fetchData('../../public/song-list.json');
      for(const index in songs) {
        const opt = utils.createDOMElement('option');
        opt.appendChild( document.createTextNode(songs[index].artist + ': ' + songs[index].title) );
        opt.value = songs[index].songUrl;
        songsListContainer.appendChild(opt);
      }
    } catch(err) { 
      console.log('Error: ' + err);
    }
   }

   #generateTheme = ()=> {
    const themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    const randomIndex = Math.floor(Math.random() * themes.length);
    this.#themeInput.placeholder = themes[randomIndex];
  }
  
  #_onSubmit = async (event)=> {
    event.preventDefault();
    
    const songUrl = this.#songsListContainer.value;
    const path = "http://api.giphy.com/v1/gifs/search?q=";
    const limit = 25;
    const rating = 'g';
    const api_key = '2ah9anki4HuLN7g5yJapEXT8fasVqdJu';
     const query = path + encodeURIComponent(this.#themeInput.value) 
     + "&api_key=" + encodeURIComponent(api_key) + "&limit=" + limit + "&rating=" + rating;
    
     try{
      const jsonData = await this.fetchData(query);
      const gifs = jsonData.data;
      if(gifs.length < 2) {
        throw new Error('Not enough gifs');
      }
      utils.hideDOMElement(this.#container);
      const queryCompleteEvent = new CustomEvent(QUERY_COMPLETE_EVENT,  
         {detail: {'gifs': gifs, 'song':  songUrl}});
      document.dispatchEvent(queryCompleteEvent);
    } catch(err) {
      console.log('ERROR: ' + err);
      if(err.message === 'Not enough gifs'){
        utils.getDOMElement('error').classList.remove('inactive');
      }
    }
    
  }

}
