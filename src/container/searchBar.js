import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: ''
        }
    }
    onInputChange(event){
        this.setState({city: event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.city);
        this.setState({city: ''});
    }
    render(){
        return(
            <form className='input-group' onSubmit={(e)=>this.onFormSubmit(e)}>
                <input type='text' 
                    value={this.state.city}
                    onChange = {(e)=>this.onInputChange(e)}
                    className='form-control' 
                    placeholder='Get a five day forcast of your favorite city'
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Add City</button>
                </span>                    
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);