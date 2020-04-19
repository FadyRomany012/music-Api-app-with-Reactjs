import React , {Component} from 'react';

class Search extends Component{
    state = {
term : ''
    }
    handleInputChange = (event) => {
        this.setState({term :event.target.value})
    }

    submitSearch = (event) => {
event.preventDefault();
let{term} =this.state;
this.props.searchAlbums(term);
    }
    render(){
        return(
            <div className="search mb-2">
                <form onSubmit = {(event) => this.submitSearch(event)}>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="form-group">
                                <input type="text"
                                placeholder="Research"
                                className="form-control"
                                value = {this.state.term}
                                onChange = {(event) => this.handleInputChange(event)}
                                />

                            </div>

                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">
                                    <i className="fa fa-search fa-fw"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Search;