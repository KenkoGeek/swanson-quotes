import React, { Component } from 'react';
import './App.css';
import { SubTitle } from 'reactbulma';

class App extends Component {

  constructor(props) {
    	super(props)
        this.state = { swansonQuote: {} }
    }

  componentWillMount() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes',{
      method: 'GET',
      // mode: 'cors',
      // redirect: 'follow',

    })
      .then((response) => {
        return response.json()
      })
      .then((swansonQuote) => {
        this.setState({ swansonQuote: swansonQuote })
      })
  }

  render() {

    if (this.state.swansonQuote.length > 0){
    return (
      <div className="container is-fluid">
        <div className="App">
          <h1 className="big">;)</h1>
          <br /><br />
          <SubTitle is="3">{this.state.swansonQuote}</SubTitle>
          <div className="footer">
            <div className="columns">
              <div className="column"></div>
              <div className="column">By KenkoGeek</div>
              <div className="column"></div>
            </div>
        </div>
        </div>
      </div>
      )
    } else {
      return(
        <div className="App">
          <h1 className="big">:(</h1>
          <h2>Oooops...</h2>
          <div className="footer">By KenkoGeek</div>
        </div>
      )
    }
  }
}
export default App;
