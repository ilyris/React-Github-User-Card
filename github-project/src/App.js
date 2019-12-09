import React from 'react';
import './App.css';
import axios from 'axios';
import S from 'styled-components';
import {followersArray} from './userdata'
import CardList from './CardList';


class App extends React.Component {
    constructor(){
        super();

        this.state = {
          userArray: [],
          ilyrisArray: {}
        }
    }

    componentDidMount() {

      axios.get('https://api.github.com/users/ilyris')
      .then((response) => {
        console.log(response.data);
        this.setState({...this.state, ilyrisArray: response.data})
      })
      .catch( (err) => {
        console.log(err)
      });

      axios.get('https://api.github.com/users/ilyris/followers')
      .then((response) => {
        console.log(response.data);
        this.setState({...this.state, userArray: response.data})
      })
      .catch( (err) => {
        console.log(err)
      });
    }



  render() {
    return(
      <div className="container">
        <CardList userArray={this.state.userArray} ilyrisArray={this.state.ilyrisArray}/>
      </div>

    );
  }
}

export default App;


