import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../Redux/todoSlice';


export const store = configureStore({reducer:{ todoSlice }})