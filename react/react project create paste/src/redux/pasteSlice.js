// Redux Slice
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const initialState = {
  pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes'))
    : [],
};


export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      state.pastes.push(action.payload);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste added successfully');
    },
    updateToPastes: (state, action) => {
      const index = state.pastes.findIndex((paste) => paste._id === action.payload._id);
      if (index !== -1) {
        state.pastes[index] = action.payload;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste updated successfully');
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem('pastes');
    },
    removeFromPastes: (state, action) => {
      state.pastes = state.pastes.filter((paste) => paste._id !== action.payload._id);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste deleted successfully');
    },
  },
});

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions;

export default pasteSlice.reducer;
