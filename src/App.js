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
          textOnDropEvent="Deja los archivos aquí..."
          textOutDropFile="Arrastra los archivos o selecciona los mismos"
        />
      </div>
    );
  }
}

export default App;
