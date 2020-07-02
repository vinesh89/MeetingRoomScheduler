/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import _  from 'lodash';
import GetScheduleList  from '../../api/getSchedulesListApi';
import BottomSheet from '../../components/BottomSheet/bottomSheet';
import HeaderRightIconButtom from '../../components/Header/headerRightIconButton';
import {Colors, Theme} from '../../components/Theme';
import DateTimePicker from '../../components/DatetimePicker/dateTimePicker';
import SchedulerHeaderSection from '../../components/SchedulerList/schedulerHeaderSection';
import BottomSheetContainer from '../../components/BottomSheet/bottomSheetContainer';
import SchedulerList from '../../components/SchedulerList/schedulerList';
import {NetworkStatus, NetworkError} from '../../components/NetworkStatus/netWorkStatus';
import {useNetInfo} from "@react-native-community/netinfo";
import Routes from '../../routes';

const Scheduler = ({ navigation, getScheduleList, scheduleList, isError }) => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState();
    const [selectedDate, setSelectedDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [ sortParam, setSortParam ] = useState({});
    const netInfo = useNetInfo();

    useEffect(() => {
      if ((!(_.isEmpty(timeSlot)) && !(_.isEmpty(selectedDate)) && netInfo.isConnected)) {
        getScheduleList();
      }
    }, [selectedDate, timeSlot, netInfo.isConnected]);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Text></Text>
        ),
        headerRight: () => (
          <HeaderRightIconButtom 
            onPress={() => navigation.navigate(Routes.CAMERA.route)}
            icon="camera"
            size={20}
          />
        ),
      });
    }, [navigation]);

    const handleSort = () => {
      setBottomSheetVisible(true);
    }

    const onDateChange = (event, date) => {
      setSelectedDate(date);
    };

    const onTimeChange = (event, selectedTime) => {
      setTimeSlot(selectedTime);
    }

    const onApplyAction = (sortBy) => {
      setSortParam(sortBy);
      setBottomSheetVisible(false)
    }

    const onResetAction = (sortBy) => {
      setSortParam(sortBy);
      setBottomSheetVisible(false);
    }

    const RenderScheduleList = () => {
      if (netInfo.isConnected) {
        if (_.isEmpty(scheduleList)) {
          return(
            <View style={styles.scheduleContaner}>
              <Text style={styles.scheduleText}>Please Select a Date and Timeslot to check the room availability.</Text>
            </View>
          )
        }

        if (!_.isNil(isError)) {
          return <NetworkError />
        }
  
        return <SchedulerList data={scheduleList} timeSlot={timeSlot} sortBy={sortParam}/>
      }

      if (!netInfo.isConnected) {
        return <NetworkStatus />
      }
      return <SchedulerList data={scheduleList} timeSlot={timeSlot} sortBy={sortParam}/>
    }

    return (
        <>
          <StatusBar barStyle="dark-content" backgroundColor={Colors.white}/>
          <View style={styles.conatiner}>
            <DateTimePicker
              title="Date"
              mode='date'
              minuteInterval={0}
              onChange={onDateChange}
            />
            <DateTimePicker
              title="Timeslot"
              mode='time'
              minuteInterval={30}
              onChange={onTimeChange}
            />
            <SchedulerHeaderSection title="Rooms" actionTitle="Sort" iconName="sort" onAction={() => handleSort()}/>
            {bottomSheetVisible && 
              <BottomSheet closeSheet={() => setBottomSheetVisible(false)}>
                <BottomSheetContainer onApply={onApplyAction} onReset={onResetAction} sortBy={sortParam}/>
              </BottomSheet>
            }
            <RenderScheduleList />
          </View>
        </>
    );
};

const styles = StyleSheet.create({
  conatiner:{
    flex: 1,
    paddingLeft: Theme.leftSpacing,
    paddingRight: Theme.rightSpacing,
    paddingBottom: 10,
    backgroundColor: Colors.white,
  },
  scheduleContaner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scheduleText: {
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({
  scheduleList: state.scheduleReducer.schedules,
  isLoading: state.scheduleReducer.loading,
  isError: state.scheduleReducer.error
})

const mapDispatchToProps = dispatch => ({
  getScheduleList: () => dispatch(GetScheduleList())
});

export default React.memo(connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler));
