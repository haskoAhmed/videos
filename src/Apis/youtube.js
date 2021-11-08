import axios from 'axios';

const KEY = 'AIzaSyAUy5oixvCLhYPc1BfBGXQA-ZRIAunlflo';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params :{
        part : 'snippet',
        maxResults : 8,
        key : KEY

    }

});
