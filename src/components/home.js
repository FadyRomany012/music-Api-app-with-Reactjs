import React , {Component} from 'react';
import Header from './widgets/header';
import * as actions  from './action/index';
import Search from './searchbar/searchbar';
import {Link} from 'react-router-dom';
import './home.css';
import swal from 'sweetalert';
class Home extends Component {
    state = {
        albums:[]
    }
    componentDidMount(){
actions.getAlbums().then(item => this.setState({
    albums:item
}));
}
searchAlbums = (term) =>{
    actions.getAlbums(term).then(item => this.setState({
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
<Link to={`/details/${item.album.id}`} className="link"><i className="fa fa-info fa-fw"></i></Link>
<a onClick ={() => this.addToFavorites(item)} className="link"><i className="fa fa-heart fa-fw"></i></a>

        </div>
    </div>
    </div>

    </div> 
        ))
        : null
    }
render(){
    console.log(this.state);
    return(
        <div className="container">
<div className="row mt-4">
    <div className="col-md-10 mx-auto">
<Header/>
<Search searchAlbums = {this.searchAlbums } />
<div className="row">
   
{this.renderAlbums()}

</div>
    </div>
</div>
      </div>
    )
}
}

export default Home;