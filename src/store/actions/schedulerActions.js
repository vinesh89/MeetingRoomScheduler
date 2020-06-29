export const FETCH_SCHEDULE_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_SCHEDULE_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_SCHEDULE_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchSchedulePending = () => ({
    type: FETCH_SCHEDULE_PENDING
});

export const fetchScheduleSuccess = (payload) => ({
    type: FETCH_SCHEDULE_SUCCESS,
    payload
});

export const fetchScheduleError = (error) => ({
    type: FETCH_SCHEDULE_ERROR,
    error
});