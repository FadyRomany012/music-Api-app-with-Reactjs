import axios from 'axios';
const API_KEY ='e808b790f2mshb11270946303b96p1f67a4jsn1c50fa9d8ce2';
const request =axios.create({
    baseURL :'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout:30000,
    headers:{'X-RapidAPI-Key': API_KEY}
});
export function getAlbums(search ='-'){
    const albums = request.get(`search?q=${search}`)
    .then(response =>response.data.data)
    .catch(error => console.log(error));
    return albums
}

export function getAlbum(id){
    const album =request.get(`album/${id}`)
    .then(response =>response.data)
    .catch(error => console.log(error));

    return album;
}
export function getAlbumm(search ='-'){
    const albums = request.get(`search?q=${search}`)
    .then(response =>response.data.data)
    .catch(error => console.log(error));
    return albums
}
export function getFavoritesalbums(){
    const album =localStorage.getItem('favorites');
    return album;
}