'use strict';
//import React from 'react';

let UiClass = (obj) => {
    let response = ' ';
    for (let key in obj) {
        response = obj[key] ? response += key + ' ' : response;
    }
    return response;
}

let literalDate = (date) => {
    const appointmentDate = new Date(date);
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return {
        dateDay: appointmentDate.getDate(),
        dateYear: appointmentDate.getFullYear(),
        dateMonth: appointmentDate.getMonth(),
        literalMont: months[appointmentDate.getMonth()],
        hour: appointmentDate.getHours(),
        minutes: appointmentDate.getMinutes()
    }
}

export default {
    class: UiClass,
    literalDate
}