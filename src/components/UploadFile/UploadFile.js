import React, { Component } from 'react';
import './upload-file.scss';
import firebase from '../firebase/firebase';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filesDetails: []
        }
        this.files = {};
    }

    _filesChoosen = (files) => {

        let listFiles = [];

        const file = {
            name: '',
            size: 0,
            progress: 0,
            error: '',
            success: ''
        }

        Array.from(files).forEach((e, i) => {
            let { name, size } = e;
            listFiles.push({ ...file, ...{ name, size } });
        });
        this.files = files;

        this.setState({
            filesDetails: listFiles
        });
    }

    _submiteForm(event) {
        event.preventDefault();
        const cb = {
            loading: this._showProgress.bind(this),
            error: this._error.bind(this),
            success: this._success.bind(this)
        }
        firebase.sendFiles(this.files, cb);
    }

    _error = (index, err) => {
        let newState = [...this.state.filesDetails];
        newState[index].error = err;
        this.setState({ newState });
    }

    _success = (index, res) => {
        let newState = [...this.state.filesDetails];
        newState[index].success = res;
        this.setState({ newState });
    }

    _showProgress = (index, progress) => {
        let newState = [...this.state.filesDetails];
        newState[index].progress = progress.toFixed(2);

        this.setState({ newState });
        //console.log(' FILE: ' + index + '    Upload is ' + progress + '% done'); 
    }

    _deleteFile(index) {
        let newFiles = Object.assign({}, this.state.files);
        delete newFiles[index];
        this.setState({
            files: newFiles
        })
    }

    render() {
        console.log("progress", this.state.filesDetails);
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
                    {Object.keys(this.state.filesDetails).map((index) => {
                        return (
                            <li key={index} className="item-list-file">
                                <span>{this.state.filesDetails[index].name}</span>
                                <span className="delete-file" onClick={() => { this._deleteFile(index) }}>X</span>
                                <div>
                                    <p>Tamaño: {(this.state.filesDetails[index].size / 1000).toFixed(2)} Kb.</p>
                                    <span>Progress  {this.state.filesDetails[index].progress} %</span>
                                    <div>
                                        <a href={ this.state.filesDetails[index].success } >Success: { this.state.filesDetails[index].success }</a>
                                    </div>
                                </div>
                                <div className="progress-upload-file" style={ { width: this.state.filesDetails[index].progress + '%' } }></div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default UploadFile; 