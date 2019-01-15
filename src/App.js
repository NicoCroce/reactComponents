import React, { Component } from 'react';
import UploadFile from './components/UploadFile/UploadFile';
import Firebase from './components/firebase/firebase';
import './App.scss';
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
          connection= { Firebase }
        />
      </div>
    );
  }
}

export default App;
