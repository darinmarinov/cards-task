import React from 'react';
import CardsList from './components/Cards/CardsList'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardsList/>
        </header>
      </div>
    );
  }
}

export default App;
