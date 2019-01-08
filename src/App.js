import React, { Component } from 'react';
import './App.scss';
import UploadFile from './components/UploadFile/UploadFile';
import './components/firebase/firebase'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <UploadFile />
      </div>
    );
  }
}

export default App;
