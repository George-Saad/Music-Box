
class MusicScreen {
  constructor(container, audioPlayer, gifDisplay, playButton) {
    this.container = container;
    this.loading();
    this.audioPlayer = audioPlayer;
    this.audioPlayer.setKickCallback(this._onKick);
    this.gifDisplay = gifDisplay;
    this.gifDisplay.setOnGifsReadyCallback(this._onGifsReady);
    this.playButton = playButton;

    this.playButton.setNotifiedCallback(this._onPlayButtonToggle);
    
  }

  _onKick = ()=> {
    this.gifDisplay._changeGif();
  }

  _onGifsReady = ()=> {
    this.audioPlayer.play();
    this.loadingFinished();
    this.show();
  }

  _onPlayButtonToggle = ()=> {
    if(this.audioPlayer.isPlay)
      this.audioPlayer.pause();
    else
      this.audioPlayer.play();
  }

  show = ()=> {
    this.container.classList.remove("inactive");
  }

  loading = ()=> {
    const loadingContainer = createDOMElement('div', { id:LOADING_ID } );
    loadingContainer.textContent = 'Loading...';
    this.container.parentNode.appendChild(loadingContainer);
  }

  loadingFinished = ()=> {
    const loadingElement = getDOMElement(LOADING_ID);
    loadingElement.classList.add(INACTIVE_CLASS);
  }

}
