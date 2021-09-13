
export default class PlayButton {
  
  #container;
  #isPlaying;
  #playButtonImg;
  #notifyMusicScreenCallbcak
  
  constructor(container) {
    this.#container = container;
    this.#isPlaying = true;
    this.#playButtonImg = this.#container.querySelector('img');
    this.#playButtonImg.addEventListener('click', this.#_toggle);
  }

  setNotifiedCallback = (callbackFun)=> {
    this.#notifyMusicScreenCallbcak = callbackFun;
  }

  #_toggle = ()=> {
    if (this.#isPlaying === true){
      this.#playButtonImg.src = '../../public/images/play-icon.png';
      this.#isPlaying = !this.#isPlaying;
      this.#notifyMusicScreenCallbcak();
    }
    else{
      this.#playButtonImg.src = '../../public/images/pause-icon.png';
      this.#isPlaying = !this.#isPlaying;
      this.#notifyMusicScreenCallbcak();
    }
        
  }
  
}
