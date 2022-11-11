import axios from 'axios'


const KEY ='AIzaSyC335oQF8x_w81hW83_jyLA4r0PW6PQOiA'


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults: 5,
        key: KEY,
    }
});