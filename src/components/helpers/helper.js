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

const isFunction = (e) => typeof (e) == "function";
const isEmpty = (e) => e == null || e == undefined || e == "" || e.length == 0 ? true : false;
const isObject = (e) => typeof (e) == "object";

const isValue = (element) =>
    isFunction(element) ? true : // verifico si es una funcion
        isEmpty(element) ? false : // verifico si existe y no esta vacio
            isObject(element) && element.size == undefined && JSON.stringify(element) === '{}' ? false : // verifico si es objeto y si es Map
                element.size == 0 ? false : // si es map que sea mayor a 0
                    true;

export default {
    class: UiClass,
    literalDate,
    isValue
}