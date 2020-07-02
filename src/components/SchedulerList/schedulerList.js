import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import _  from 'lodash';
import { Colors } from '../Theme/index';
import { getHourFromTimeSlot, getMinsFromTimeSlot, sortListingBy } from '../Utilities/utility';
import SchedulerCardItem from './schedulerCardItem';
import PropTypes from 'prop-types';

const SchedulerList = (props) => {
    const {data, timeSlot, sortBy} = props;
    const [scheduleList, setScheduleList] = useState([data]);
    const hour = getHourFromTimeSlot(timeSlot);
    const minute = getMinsFromTimeSlot(timeSlot);

    const getScheduleListForTimeSlot = () => {
        let timeSlotsList = _.orderBy([...data], ['level'], ['asc']);
        let filteredScheduleList = [];
        _.forEach(timeSlotsList, function(value) {
            let timeSlots = value.availability; 
            let timeSlotObj = value;
            let selectedTimeSlots = {};
            _.forEach(_.keys(timeSlots), function(slot) {
                if(getHourFromTimeSlot(slot) == hour && (minute >= getMinsFromTimeSlot(slot) && minute <= 30)) {
                    selectedTimeSlots[slot] = timeSlots[slot];
                }
                if(getHourFromTimeSlot(slot) == hour && (minute >= getMinsFromTimeSlot(slot) && minute >= 30)) {
                    selectedTimeSlots[slot] = timeSlots[slot];
                }
            });
            timeSlotObj['availability'] =  selectedTimeSlots;
            filteredScheduleList.push(timeSlotObj);
        });
        if(!_.isEmpty(sortBy.id)) {
            filteredScheduleList = sortListingBy(filteredScheduleList, sortBy.id, 'desc');
        }
        setScheduleList(filteredScheduleList);
    }

    useEffect(() => {
        getScheduleListForTimeSlot();
    }, []);

    return(
        <FlatList
            data={scheduleList}
            renderItem={(item, index) => 
                <View style={styles.container}>
                    <SchedulerCardItem item={item.item} />
                </View>
            }
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    }
});

SchedulerList.PropTypes = {
    data: PropTypes.array.isRequired,
    timeSlot: PropTypes.string.isRequired,
    sortBy: PropTypes.object
}

export default React.memo(SchedulerList);