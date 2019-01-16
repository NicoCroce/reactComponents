import React, { Component } from 'react';
import Helper from '../helpers/helper';
import Dropzone from 'react-dropzone'
import './upload-file.scss';
import '../icons/style.css';

/**
 * @prop { function } response - Return all items when these are loaded in firebase.
 * @prop { class } connection - Connection file. This must include sendFiles function.
 * @prop { class } textOnDropEvent - Text used while the files are being dragged.
 * @prop { class } textOutDropFile - Text used while don't the files are being dragged.
 * @class { array } state.filesDetails - Contain all items with details.
 * @class { array } files - Contain all source files selected.
 * @this { function }  _onDrop - It runs when files are uploaded with drag and drop.
 * @this { function }  _filesChoosen - It runs as a callback when upload files or drag and drop them.
 * @this { function }  _sendFiles - Send files to firebase class.
 * @this { function }  _error - It run as a callback when firebase generate an error.
 * @this { function }  _success - It run as a callback when firebase generate a success.
 * @this { function }  _showProgress - It run as a callback when firebase dens a progress upload file.
 * @this { function }  _deleteFile - It run when delete a file.
 * @this { function }  _getSize - Return size file.
 * @this { function }  _getIconFile - Return icons according to params.
 * @this { function }  _buttonUploadAction - Return an HTML block concerning to files upload  button.
 * @this { function }  UploadForm - 
 */

class UploadFile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filesDetails: []
        }
        this.files = [];
        this.connection = props.connection;
        this.textOnDropEvent = props.textOnDropEvent;
        this.textOutDropFile = props.textOutDropFile;
    }
    
    _onDrop = (acceptedFiles, rejectedFiles) => {
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
        this.connection.sendFiles(this.files, cb);
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
        this.props.response(newState[index]);
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

                <Dropzone onDrop={this._onDrop}>
                    {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                            <div
                                {...getRootProps()}
                                className={'upload-area ' + Helper.class({ 'dropzone--isActive': isDragActive })}
                            >
                                <input {...getInputProps()} />
                                { isDragActive ? <p>{ this.textOnDropEvent }</p> : <p>{ this.textOutDropFile }</p> }
                                
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