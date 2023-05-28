import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name :"themeInfo",
    initialState :{
        data : {color:"light-theme"}
    },
    reducers : {
        changeTheme : (state, action) =>{
            state.data = action.payload
        }
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer