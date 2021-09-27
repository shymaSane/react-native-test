import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    //user initial data
    initialState:{
        email: '',
        username:'',
        password: '',
        birthday:'',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ''
    },

    reducers: {

    }
})