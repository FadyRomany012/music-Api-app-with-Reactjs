import React  from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/home';
import DetailsAlbum from './components/detailsAlbum';
import FavoritesAlbums from './components/favoritesAlbums';

const Routes =() =>{

    return(
        <Switch>
<Route path="/" exact component={Home}/>
<Route path="/details/:id" exact component={DetailsAlbum}/>

<Route path="/favorites" exact component={FavoritesAlbums}/>


 </Switch>
    )
}


export default Routes;