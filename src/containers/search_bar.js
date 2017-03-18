import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.searchWeather = this.searchWeather.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  searchWeather(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  fetchWeather(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

 render() {
    return(
      <div>
        <form onSubmit={this.fetchWeather} className="input-group">
          <input className="form-control" onChange={this.searchWeather} value={this.state.term}/>
          <span>
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
