import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import doctorReducer from './doctorReducer';
import patientReducer from './patientReducer';

export const store = configureStore({
  reducer: {
    state: reducers,
    doctorState: doctorReducer,
    patientState: patientReducer
  }
});

export default  store;
