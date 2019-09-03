import axios from 'axios';


const KEY = "AIzaSyBGa2ob4NtokBaBFS0y8SCXm-hZoJsVJmY"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        key: KEY,
    }
});