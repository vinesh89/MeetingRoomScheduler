import { FETCH_SCHEDULE_PENDING, FETCH_SCHEDULE_SUCCESS, FETCH_SCHEDULE_ERROR } from '../actions/schedulerActions'; 

const initialState = {
    loading: false,
    schedules: [],
    error: null,
}

const schedulerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SCHEDULE_PENDING:
            return {
                ...state,
                loading: true
            }
        case FETCH_SCHEDULE_SUCCESS:
            return {
                ...state,
                loading: false,
                schedules: action.payload
            }
        case FETCH_SCHEDULE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default schedulerReducer;