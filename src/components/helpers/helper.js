'use strict';
//import React from 'react';

let UiClass = (obj) => {
    let response = ' ';
    for (let key in obj) {
       response = obj[key] ? response += key + ' ' : response;
    }
    return response;
}

export default {
    class: UiClass
}