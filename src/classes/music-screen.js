import DOMUtils from "../DOMUtils.js";
import { LOADING_ID, INACTIVE_CLASS,  } from '../constants.js';

const utils = new DOMUtils();

export default class MusicScreen {

  #container;
  #audioPlayer;
  #gifDisplay;
  #playButton;

  constructor(container, audioPlayer, gifDisplay, playButton) {
    this.#container = container;
    this.#loading();
    this.#audioPlayer = audioPlayer;
    this.#audioPlayer.setKickCallback(this._onKick);
    this.#gifDisplay = gifDisplay;
    this.#gifDisplay.setOnGifsReadyCallback(this._onGifsReady);
    this.#playButton = playButton;

    this.#playButton.setNotifiedCallback(this._onPlayButtonToggle);    
  }

  _onKick = ()=> {
    this.#gifDisplay._changeGif();
  }

  _onGifsReady = ()=> {
    this.#audioPlayer.play();
    this.#loadingFinished();
    utils.showDOMElement(this.#container);
  }

  _onPlayButtonToggle = ()=> {
    if(this.#audioPlayer.isPlay)
      this.#audioPlayer.pause();
    else
      this.#audioPlayer.play();
  }

  #loading = ()=> {
    const loadingContainer = utils.createDOMElement('div', { id:LOADING_ID } );
    loadingContainer.textContent = 'Loading...';
    this.#container.parentNode.appendChild(loadingContainer);
  }

  #loadingFinished = ()=> {
    const loadingElement = utils.getDOMElement(LOADING_ID);
    utils.hideDOMElement(loadingElement);
  }

}
