import { alertConstants } from '../constants';

export const  alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function success(message) {
    return { type: alertConstants.ERROR, message };
}

function success() {
    return { type: alertConstants.CLEAR };
}