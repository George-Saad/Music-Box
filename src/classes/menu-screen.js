
class MenuScreen {
  constructor(container) {
  
    this.generateTheme = this.generateTheme.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this.hide = this.hide.bind(this);

    this.container = container;
    this.songsListContainer =  getDOMElement(SONG_SELECTOR_ID);
    this.populateSongSelector(this.songsListContainer);

    this.themeInput = getDOMElement(QUERY_INPUT_ID);
    this.generateTheme();
    
    this.goButton = this.container.querySelector("input[value=Go]");
    this.goButton.addEventListener('click', this._onSubmit);
  
  }

  async fetchData(url) {
    const response = await fetch(url);
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    } else {
      throw new Error('HTTP ERROR ' + response.status);
    }
  }

   async populateSongSelector(songsListContainer){
    try {
      const songs = await this.fetchData('../../public/song-list.json');
      for(const index in songs) {
        const opt = createDOMElement('option');
        opt.appendChild( document.createTextNode(songs[index].artist + ': ' + songs[index].title) );
        opt.value = songs[index].songUrl;
        songsListContainer.appendChild(opt);
      }
    } catch(err) { 
      console.log('Error: ' + err);
    }
   }

   generateTheme(){
    const themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    const randomIndex = Math.floor(Math.random() * themes.length);
    this.themeInput.placeholder = themes[randomIndex];
  }
  
  async _onSubmit(event){
    event.preventDefault();
    this.hide();
    
    const songUrl = this.songsListContainer.value;
    const path = "http://api.giphy.com/v1/gifs/search?q=";
    const limit = 25;
    const rating = 'g';
    const api_key = 'dc6zaTOxFJmzC';
     const query = path + encodeURIComponent(this.themeInput.value) 
     + "&api_key=" + encodeURIComponent(api_key) + "&limit=" + limit + "&rating=" + rating;
    
     try{
      const jsonData = await this.fetchData(query);
      const gifs = jsonData.data;
      const queryCompleteEvent = new CustomEvent(QUERY_COMPLETE_EVENT,  
         {detail: {'gifs': gifs, 'song':  songUrl}});
      document.dispatchEvent(queryCompleteEvent);
    } catch(err) {
      console.log('ERROR: ' + err);
    }
    
  }

  hide(){
    this.container.classList.add('inactive');
  }

}
