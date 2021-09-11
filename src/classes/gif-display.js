
class GifDisplay {
  constructor(container, gifs) {
    this.changeGif = this.changeGif.bind(this);
    
    this.container = container;
    this.gifs = gifs;
    this.currentGifIndex = -1;
    this.changeGif();
  }

  changeGif(){
    
    this.currentGifIndex++;
    if(this.currentGifIndex === this.gifs.length) {
      this.currentGifIndex = 0;
    }
    
    this.container.style.backgroundImage = 'url(' + this.gifs[this.currentGifIndex].images.downsized.url + ')';

  }

}
