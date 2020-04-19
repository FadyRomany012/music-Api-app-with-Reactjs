import React , {Component} from 'react';
import * as actions from './action/index';
import Header from './widgets/header';
import Search from './searchbar/searchbar';
import {Link} from 'react-router-dom';
import './home.css';
import swal from 'sweetalert';

class DetailsAlbum extends Component{
    state = {
album : '',
tracks :[],
albums:[]

    }
    componentDidMount(){
        actions.getAlbum(this.props.match.params.id).then(album => {
            this.setState({
                album,
                tracks: album.tracks.data
            })
        })
        actions.getAlbumm().then(item => this.setState({
            albums :item
        }))
    }

    addToFavorites = (album) => {
        let oldFavorotes =JSON.parse(localStorage.getItem('favorites')) || [];
        if(this.checkAlbum(oldFavorotes, album)){
            swal({
                title : 'album existe !',
                text :' sorry this  album not  access in  your  country',
                icon :'warning'
            });
            return false;
        }
        oldFavorotes.push(album);
        let favorites = oldFavorotes;
        localStorage.setItem('favorites',JSON.stringify(favorites));
        swal({
         title : 'album added !',
         text :' album add  to  favorite',
         icon :'success'
     });
    }
 checkAlbum = (albums,album)=>{
     let found = albums.some(function(item){
         return item.album.id === album.album.id;
     });
     return found;
 }
    renderTracks = () =>{
        const {tracks} = this.state;
        return tracks && tracks.length ?
        tracks.map((track,index)=>(
<figure key= {index} className="figure"> 
        <figcaption key={index} className="figure-caption text-xs-right">listining {track.title}</figcaption>

        <audio controls src ={track.preview}>
listen to the  audio
            <code>audio</code> html.element
        </audio>
</figure>
        ))
        :
        null;
    }
    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length?
        albums.map((item,index)=>(
<div key={index} className="col-md-4 mb-2">
    <div className="card border-danger">
<img src={item.album.cover_big} className="img-fluid card-img-top" alt="" />
<span className="text-primary">{item.artist.name}</span>
<div className="card-title">
{item.title}

</div>
<div className="card-footer">
        <div className="links">
<Link to={`/details/${item.album.id}`} className="link"><i onClick={'refresh'} className="fa fa-info fa-fw"></i></Link>
<a onClick ={() => this.addToFavorites(item)} className="link"><i className="fa fa-heart fa-fw"></i></a>

        </div>
    </div>
    </div>

    </div> 
        ))
        : null
    }






    renderAlbum = () =>{
        const {album} = this.state;
        return (
<div  className="col-md-12 mb-3">
    <div className="card border-danger">
<img src={album.cover_big} className="img-fluid card-img-top" alt="" />
<br/>
<span className="text-primary">{album.release_date}</span>

<div className="card-title">
<br/>

{album.title}
<br/><br/>
</div>
<div className="card-footer">
{this.renderTracks()}
</div>
  </div>

    </div> 
        )

    }
render(){
    console.log(this.state);

    return(
        <div className="container">
        <div className="row mt-4">
            <div className="col-md-10 mx-auto">
        <Header/>
        <div className="row">
           
        {this.renderAlbum()}
        {this.renderAlbums()}

        
        </div>
            </div>
        </div>
              </div>
    )
}

}

export default DetailsAlbum;