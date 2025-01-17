import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes: localStorage.getItem('pastes')
        ? JSON.parse(localStorage.getItem('pastes'))
        : [],
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPastes: (state, action) => {
            state.pastes.push(action.payload);
            localStorage.setItem('pastes', JSON.stringify(state.pastes));
        },
        updateToPastes: (state, action) => {
            const index = state.pastes.findIndex(paste => paste.id === action.payload.id);
            if (index !== -1) {
                state.pastes[index] = action.payload;
                localStorage.setItem('pastes', JSON.stringify(state.pastes));
            }
        },
        resetAllPastes: (state) => {
            state.pastes = [];
            localStorage.removeItem('pastes');
        },
        removeFromPastes: (state, action) => {
            state.pastes = state.pastes.filter(paste => paste.id !== action.payload.id);
            localStorage.setItem('pastes', JSON.stringify(state.pastes));
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer
