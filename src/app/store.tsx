import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './features/task/TaskSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer
  }
})