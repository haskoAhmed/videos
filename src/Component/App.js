import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../Apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
    state ={ videos : [],selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('football')
    }

  onTermSubmit = async (term) => {
    const response = await youtube.get('./search', {
      params : {
          q : term
      }  
    })
    console.log({
        videos:response.data.items,
        selectedVideo:response.data.items[0]
    })
    
  };
  onSelectedVideo = (video) =>{
       this.setState({selectedVideo:video})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
       <div className="ui grid">
           <div className="ui row">
        <div className="eleven wide column">
        <VideoDetails video={this.state.selectedVideo}/>
        
        </div>
        <div className="five wide column">

        <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos} />
        </div>
           </div>
       </div>
      </div>
    );
  }
}

export default App;
