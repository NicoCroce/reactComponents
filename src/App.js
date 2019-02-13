import React, { Component } from 'react';
import UploadFile from './components/UploadFile/UploadFile';
import CRUDhistoryPatient from './components/CRUDhistoryPatient/CRUDhistoryPatient';
import Firebase from './components/firebase/firebase';
import CardTemplateOne from './components/cards/CardTemplateOne/CardTemplateOne';

/* import './App.scss'; */
import './components/firebase/firebase'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.patient = {
      name: 'Nico Croce'
    }
  }


  _showFile(file) {
    console.log('Estoy en el padre', file);
  }

  render() {
    return (
      <div className="App">
        {/* <UploadFile 
          response= { this._showFile }
          loadFilesAction= { Firebase.sendFiles }
          textOnDropEvent="Deja los archivos aquí..."
          textOutDropFile="Arrastra los archivos o selecciona los mismos"
        /> */}

        {/* <CRUDhistoryPatient patient={this.patient}/> */}

        <CardTemplateOne />




      </div>
    );
  }
}

export default App;
