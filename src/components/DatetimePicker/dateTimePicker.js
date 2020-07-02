import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Colors, Theme} from '../Theme';
import {DateToStringFormater, TimeToStringFormater} from '../Utilities/utility';
import PropsTypes from 'prop-types';

const DateTimePickerComponent = (props) => {
    const {mode, onChange, title, minuteInterval} = props;
    const [isVisible, setIsVisible] = useState(false);
    const [dateValue, setDateValue] = useState('');

    const handleOnChange = (event, date) => {
        setIsVisible(false);
        if(date){
            setDateValue(date);
            onChange(event, getDateTimeModeBasedValue(date));
        }
    }

    const getDateTimeModeBasedValue = (date) => {
        return (mode === 'date' ? DateToStringFormater(date) : TimeToStringFormater(date));
    }
    
    return(
        <View style={styles.container}>
            <Text {...props} style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.textContainer} onPress={() => setIsVisible(true)}>
                <View style={styles.textContainer}>
                    {dateValue !== '' &&
                        <Text style={styles.textField}>{getDateTimeModeBasedValue(dateValue)}</Text>
                    }
                </View>
            </TouchableOpacity>
            {isVisible &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dateValue === '' ? new Date() : dateValue}
                    mode={mode}
                    is24Hour={true}
                    minuteInterval={minuteInterval}
                    display="default"
                    onChange={handleOnChange}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Theme.topSpacing,
    },
    title: {
        color: Colors.light,
    },
    textContainer:{
        height: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    textField: {
        padding: 0,
        marginTop: 5,
    }
});

DateTimePickerComponent.defaultProps = {
    mode: 'date',
    title: 'Date',
    minuteInterval: 0
}

DateTimePickerComponent.propTypes = {
    mode: PropsTypes.string,
    title: PropsTypes.string,
    minuteInterval: PropsTypes.number,
    onChange: PropsTypes.func.isRequired,
}

export default DateTimePickerComponent;