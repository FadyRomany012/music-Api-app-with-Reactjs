import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

const App = ()=>{
    return(
        <BrowserRouter className="">
<Routes/>
        </BrowserRouter>
    )
}

ReactDom.render(<App/>,document.getElementById("root"));