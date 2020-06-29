import { combineReducers } from 'redux';
import ScheduleReducer from './schedulerReducer';

const rootReducer = combineReducers({
    scheduleReducer: ScheduleReducer
  });
export default rootReducer;