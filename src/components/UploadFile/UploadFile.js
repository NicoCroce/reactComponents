import React, { Component } from 'react';
import Firebase from '../firebase/firebase';
import Helper from '../helpers/helper';
import Dropzone from 'react-dropzone'
import './upload-file.scss';
import '../icons/style.css';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filesDetails: []
        }
        this.files = [];
    }

    onDrop = (acceptedFiles, rejectedFiles) => {
        // Do something with files
        this._filesChoosen(acceptedFiles);
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
    }

    _sendFiles(event) {
        event.preventDefault();
        const cb = {
            loading: this._showProgress.bind(this),
            error: this._error.bind(this),
            success: this._success.bind(this)
        }
        Firebase.sendFiles(this.files, cb);
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
        if (this.state.filesDetails[index].progress != 0) return;

        let newFiles = [...this.files];
        newFiles.splice(index, 1);
        this.files = newFiles;
        let newFilesDetails = [...this.state.filesDetails];
        newFilesDetails.splice(index, 1);
        this.setState({
            filesDetails: newFilesDetails
        });
    }

    _getSize(size) {
        return (size < 1000000) ? (size / 1000).toFixed(2) + " Kb" : (size / 1000000).toFixed(2) + " Mb"
    }

    _getIconFile(progress) {
        return progress == 100 ? 'icon-upload-cloud-check' : 'icon-upload-file-text2';
    }

    _buttonUploadAction = () => {
        if (this.state.filesDetails.length == 0) return;
        return (
            <div className="upload-action">
                <span 
                    className="icon-upload-cloud-upload button-action"
                    onClick={(e) => { this._sendFiles(e) }}
                ></span>
            </div>
        );
    }

    UploadForm = () => (
        <div className="mgt-40">
            <span htmlFor="loadFile" className="icon-upload-upload"></span>
            {this._buttonUploadAction()}
        </div>
    );

    render() {
        console.log("progress", this.state.filesDetails);
        const { UploadForm } = this;

        return (
            <div>

                <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                            <div
                                {...getRootProps()}
                                className={'upload-area ' + Helper.class({ 'dropzone--isActive': isDragActive })}
                            >
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Drop files here...</p> :
                                        <p>Try dropping some files here, or click to select files to upload.</p>
                                }
                                <UploadForm />
                            </div>
                        )
                    }}
                </Dropzone>

                <ul className="list-items-upload">
                    {this.state.filesDetails.map((item, index) => {
                        let { name, size, progress, success } = item;
                        return (
                            <li key={index}
                                className={'item-list-file ' + Helper.class({ 'loading': progress != 0 })}
                                onClick={() => { this._deleteFile(index) }}
                                title={name}>
                                <i className={this._getIconFile(progress)}></i>
                                <div className="detail-file">
                                    <span className="file-name">{name}</span>
                                    <span className="size-file"> {this._getSize(size)} </span>
                                </div>
                                {/* <div>
                                    <a href={success} >Success: {success}</a>
                                </div> */}
                                <div className="progress-upload-file" style={{ width: progress + '%' }}></div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default UploadFile; 