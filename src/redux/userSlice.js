import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:'user',
    initialState:{
        isLoading:false,
        currentUser:null,
        serverErr:null
    },
    reducers:{
        loginStart:(state)=>{
            state.isLoading=true;
        },
        loginSuccess:(state,action)=>{
            state.isLoading=false;
            state.currentUser=action.payload;
        },
        loginFailure:(state,action)=>{
            state.isLoading=false;
            state.serverErr=action.payload
        },
        logout:(state)=>{
            state.isLoading=false;
            state.currentUser=null;
            state.serverErr=null;
        }
    }
});

export const {loginStart,loginSuccess,loginFailure,logout} = userSlice.actions;

export default userSlice.reducer;