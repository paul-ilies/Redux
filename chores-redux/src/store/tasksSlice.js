import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  taskId: nanoid(),
  title,
  completed: false,
  assignedto: ''
});

const initialState = [
  createTask('Order some pizza'),
  createTask('Water the plants')
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      const task = createTask(action.payload);
      state.push(task);
    },
    //traditional slice
    toggle: (state, action) => {
      const task = state.find((el) => el.taskId === action.payload.taskId);
      task.completed = action.payload.completed;
    },
    assingToUser: (state, action) => {
      const task = state.find((el) => el.taskId === action.payload.taskId);
      task.assignedto = action.payload.humanId;
    }
  }
});
//custom slice
export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({
  payload: { taskId, completed }
}));
