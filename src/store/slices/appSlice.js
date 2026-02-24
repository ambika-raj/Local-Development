import {createSlice} from "@reduxjs/toolkit";
const intialState = {
    user: "ankit",
    theme: "ligth"
};

const appSlice = cresteSlice({
    name:"app",
    initialSlice,
    reducers:{
        toggleTheme:(state) =>{
            state.theme = state.theme === "ligth" ? "dark" :"light";
        },
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    }
});
export const {toggleTheme, setUser} = appSlice.actions;
export default appSlice.reducer;