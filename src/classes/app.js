import MusicScreen from './music-screen.js';
import MenuScreen from './menu-screen.js';
import AudioPlayer from './audio-player.js';
import GifDisplay from './gif-display.js'; 
import PlayButton from './play-button.js';
import DOMUtils from '../DOMUtils.js';
import { MENU_ID, QUERY_COMPLETE_EVENT, BACKGROUND_GIF_ID, PLAY_BUTTON_ID, MUSIC_ID } from '../constants.js';

const utils = new DOMUtils();

export default class App {

  #menuScreen;
  #musicScreen;
  constructor() {
    const menuContainer = utils.getDOMElement(MENU_ID);
    this.#menuScreen = new MenuScreen(menuContainer);
    document.addEventListener(QUERY_COMPLETE_EVENT, this.#_setupMusicScreen);
  }

  #_setupMusicScreen = (e)=> {
    const audioPlayer = new AudioPlayer();
    audioPlayer.setSong(e.detail['song']);
    const gifDisplayContainer = utils.getDOMElement(BACKGROUND_GIF_ID);
    const gifDisplay = new GifDisplay(gifDisplayContainer, e.detail['gifs']);
    const playButtonContainer = utils.getDOMElement(PLAY_BUTTON_ID);
    const playButton = new PlayButton(playButtonContainer);
    const musicContainer = utils.getDOMElement(MUSIC_ID);
    this.#musicScreen = new MusicScreen(musicContainer, audioPlayer, gifDisplay, playButton);
  }

}