
class PlayButton {
  constructor(container) {
    this.container = container;
    this.isPlaying = true;
    this.playButtonImg = this.container.querySelector('img');
    this.playButtonImg.addEventListener('click', this._toggle);
  }

  setNotifiedCallback = (callbackFun)=> {
    this.notifyMusicScreenCallbcak = callbackFun;
  }

  _toggle = ()=> {
    if (this.isPlaying === true){
      this.playButtonImg.src = '../../public/images/play.png';
      this.isPlaying = !this.isPlaying;
      this.notifyMusicScreenCallbcak();
    }
    else{
      this.playButtonImg.src = '../../public/images/pause.png';
      this.isPlaying = !this.isPlaying;
      this.notifyMusicScreenCallbcak();
    }
        
  }
  
}
