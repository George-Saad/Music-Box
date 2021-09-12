
class GifDisplay {
  constructor(container, gifs) {
    this.container = container;
    this.buffer = getDOMElement(BUFFER_GIF_ID);
    this.gifs = gifs;

    this.preLoadImages = [];
    this.preLoadGifs(this.gifs, 0);
  }

  setOnGifsReadyCallback = (callbackFun)=> {
    this._gifsReadyCallback = callbackFun;
  }

  updateGifDisplay = ()=> {
    this.container.style.backgroundImage = 'url(' + this.preLoadImages[this.currentGifIndex].src + ')';
    this.currentGifIndex++;
  }

  updateBuffer = ()=> {
    this.buffer.style.backgroundImage = 'url(' + this.preLoadImages[this.currentGifIndex].src + ')';
    this.currentGifIndex++;
  }

  initGifs = ()=> {
    this.currentGifIndex = 0;
    this.container.classList.add(FOREGROUND_CLASS);
    this.buffer.classList.add(BACKGROUND_CLASS);
    this.updateGifDisplay();
    this.updateBuffer();
  }

  _changeGif = ()=> {
    if(this.currentGifIndex >= this.preLoadImages.length) {
      this.currentGifIndex = 0;
    }

    if(this.container.classList.contains(BACKGROUND_CLASS)) {
      this.toggleGif(BACKGROUND_CLASS, FOREGROUND_CLASS);
      this.updateBuffer();
    }
    else {
      this.toggleGif(FOREGROUND_CLASS, BACKGROUND_CLASS);
      this.updateGifDisplay();
    }
  }

  toggleGif = (containerClass, bufferClass)=> {
    this.container.classList.add(bufferClass);
    this.container.classList.remove(containerClass);
    this.buffer.classList.add(containerClass);
    this.buffer.classList.remove(bufferClass);
  }

  preLoadGifs = (gifs, i)=> {
    if(i === gifs.length){
      return
    }
    const image = new Image();
    image.src = gifs[i].images.downsized.url;
    image.onload = () => {
      this.preLoadImages.push(image);
      if(this.preLoadImages.length == 2){
        this.initGifs();
        this._gifsReadyCallback();       
      }
      this.preLoadGifs(gifs, i+1)
    };
  }
}
