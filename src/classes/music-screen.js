
class MusicScreen {
  constructor(container, audioPlayer, gifDisplay, playButton) {

    this.onPlayButtonToggle = this.onPlayButtonToggle.bind(this);
    this._onKick = this._onKick.bind(this);
    this.show = this.show.bind(this);

    this.container = container;
    this.audioPlayer = audioPlayer;
    this.audioPlayer.setKickCallback(this._onKick);
    this.gifDisplay = gifDisplay;
    this.playButton = playButton;

    this.show();
    this.audioPlayer.play();

    this.playButton.setNotifiedCallback(this.onPlayButtonToggle);

  }

  _onKick(){
     console.log('kicked');
    this.gifDisplay.changeGif();
  }

  onPlayButtonToggle() {
    if(this.audioPlayer.isPlay)
      this.audioPlayer.pause();
    else
      this.audioPlayer.play();
  }

  show(){
    this.container.classList.remove("inactive");
  }

}
