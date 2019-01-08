import React, { Component } from 'react';
import './upload-file.scss';
import firebase from '../firebase/firebase';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: {}
        }
    }

    _filesChoosen = (files) => {

        let listFiles = {}; 

        const file = {
            src: undefined,
            detail: {
                progress: 0,
                error: false,
                success: false
            }
        }

        Array.from(files).forEach( (e, i) => {
            let f = { ...file, ...{src: e} }
            listFiles[i] = f;
        })

        this.setState({
            files: listFiles
        });
    }

    _submiteForm(event) {
        event.preventDefault();
        console.log('Estoy', this.state);
        firebase.sendFiles(this.state.files, this._showProgress.bind(this));
    }

    _showProgress = (index, progress) => {
        progress = progress.toFixed(2);
        let newState = Object.assign({}, this.state.files);
        newState[index].detail.progress = progress;

        this.setState({ newState });
        console.log('Upload is ' + progress + '% done'); 
    }

    _deleteFile(index) {
        let newFiles = Object.assign({}, this.state.files);
        delete newFiles[index];
        this.setState({
            files: newFiles        
        })
    }

    render() {
        console.log("progress", this.state.files)
         return (
            <div>
                <form onSubmit={(e) => this._submiteForm(e)}>
                    <input
                        type="file"
                        id="uploadFile"
                        name="upload"
                        multiple="multiple"
                        onChange={e => this._filesChoosen(e.target.files)}
                    />
                    <input type="submit" />
                </form>
                <ul>
                    { Object.keys(this.state.files).map((index) => {

                        return (
                            <li key={index} className="item-list-file">
                                <span>{ this.state.files[index].src.name}</span>
                                <span className="delete-file" onClick={ () => { this._deleteFile(index) } }>X</span>
                                <div>
                                    <span>Progress  {  this.state.files[index].detail.progress }</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default UploadFile; 