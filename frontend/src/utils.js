import {toast } from 'react-toastify';

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position : "bottom-right"
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'bottom-right'
    })
}

export const LOGIN_URL = "http://localhost:3000/user/login"
export const SIGNUP_URL = "http://localhost:3000/user/register"