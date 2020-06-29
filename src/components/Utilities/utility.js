import moment from 'moment';
import _ from 'lodash';

export const DateToStringFormater = (date) => {
    return moment(date).format('Do MMM YYYY');
}

export const TimeToStringFormater = (date) => {
    return moment(date).format('h:mm a');
}

export const getHourFromTimeSlot = (timeSlot) => {
    if (timeSlot) {
        //convert the timeslot to 24 hour format
        const hourFormat = moment(timeSlot, ["hh:mm a"]).format("HH:mm");
        return hourFormat.split(':')[0];
    }

    return '00';
}

export const getMinsFromTimeSlot = (timeSlot) => {
    if (timeSlot) {
        return timeSlot.split(':')[1].split(' ')[0];
    }

    return '00';
}

export const sortListingBy = (list, sortBy, sortOrder = 'asc') => {
    switch (sortBy) {
        case 'capacity':
            return _.orderBy([...list], function (obj) {
                return parseInt(obj['capacity']);
            }, [sortOrder]);
        case 'availability':
            return _.orderBy([...list], function (obj) {
                return parseInt(obj['availability'][_.keys(obj['availability'])]);
            }, [sortOrder]);
        default:
            break;
    }
}