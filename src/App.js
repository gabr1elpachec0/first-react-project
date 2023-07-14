import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handlePClick = this.handlePClick.bind(this);
    
  // }
  state = {
    name: 'Gabriel Pacheco',
    counter: 0
  };

  handlePClick = () => {
    this.setState({ name: 'Luis' });
  }

  handleAClick = (event) => {
    event.preventDefault()
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {

    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            {name}, {counter}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleAClick}
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
