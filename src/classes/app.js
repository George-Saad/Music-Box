

class App {
  constructor() {
    this._setupMusicScreen = this._setupMusicScreen.bind(this);

    const menuContainer = getDOMElement(MENU_ID);
    this.menu = new MenuScreen(menuContainer);
    document.addEventListener(QUERY_COMPLETE_EVENT, this._setupMusicScreen);
  }

  _setupMusicScreen(e){
    const audioPlayer = new AudioPlayer();
    audioPlayer.setSong(e.detail['song']);
    const gifDisplayContainer = getDOMElement(BACKGROUND_GIF_ID);
    const gifDisplay = new GifDisplay(gifDisplayContainer, e.detail['gifs']);
    const playButtonContainer = getDOMElement(PLAY_BUTTON_ID);
    const playButton = new PlayButton(playButtonContainer);
    const musicContainer = getDOMElement(MUSIC_ID);
    this.music = new MusicScreen(musicContainer, audioPlayer, gifDisplay, playButton);
  }

}
