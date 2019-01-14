import React, { Component } from 'react';
import './App.scss';
import UploadFile from './components/UploadFile/UploadFile';
import './components/firebase/firebase'; 

class App extends Component {
  _showFile(file) {
    console.log('Estoy en el padre', file);
  }

  render() {
    return (
      <div className="App">
        <img src="" alt=""/>
        <UploadFile 
          response= { this._showFile }
        />
      </div>
    );
  }
}

export default App;
