import { fetchSchedulePending, fetchScheduleSuccess, fetchScheduleError } from '../store/actions/schedulerActions';
import { getPeopleEndPoint } from './endpoints';

const getScheduleList = () => dispatch => {
    dispatch(fetchSchedulePending());
    fetch(getPeopleEndPoint())
    .then(res => res.json())
    .then(res => {
        if (res.error) {
            throw(res.error);
        }
        dispatch(fetchScheduleSuccess(res));
        return res;
    })
    .catch(error => {
        dispatch(fetchScheduleError(error));
    })
}

export default getScheduleList;