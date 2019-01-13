import React, { Component } from 'react';
import './upload-file.scss';
import firebase from '../firebase/firebase';
import '../icons/style.css';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filesDetails: []
        }
        this.files = [];
        this.formRef = React.createRef();
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

        this.files = Object.values(files); //Convert json to array.

        this.setState({
            filesDetails: listFiles
        });
        this.formRef.current.reset();
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
        let newFiles = [...this.files];
        newFiles.splice(index, 1);
        this.files = newFiles;
        let newFilesDetails = [...this.state.filesDetails];
        newFilesDetails.splice(index, 1);
        this.setState({
            filesDetails: newFilesDetails
        });
    }

    render() {
        console.log("progress", this.state.filesDetails);
        return (
            <div>
                <form onSubmit={(e) => this._submiteForm(e)} ref= { this.formRef }>
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
                        let { name, size, progress, success } = this.state.filesDetails[index];
                        return (
                            <li key={index} className="item-list-file" onClick={() => { this._deleteFile(index) }} title={ name }>
                                <i className="icon-upload-file-text2"></i>
                                <span className="file-name">{name}</span>
                                <div>
                                    <p>Tamaño: {(size / 1000).toFixed(2)} Kb.</p>
                                    <div>
                                        <a href={ success } >Success: { success }</a>
                                    </div>
                                </div>
                                <div className="progress-upload-file" style={ { width: progress + '%' } }></div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default UploadFile; 