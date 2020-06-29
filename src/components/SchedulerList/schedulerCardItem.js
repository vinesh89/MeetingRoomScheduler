import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../Theme/index';
import _ from 'lodash';

const SchedulerCardItem = (props) => {
    const { item } = props;
    const [availability, setAvailability] = useState(false);
    //console.log("Item Outsice: ", item);
    useEffect(() => {
        //console.log("Item UseEffect: ", item);
        //console.log("Availability Status: ", (item.availability[_.keys(item.availability)[0]] == '1' ? true : false));
        if(!(_.isEmpty(_.keys(item.availability)))) {
            const availabilityStatus = (item.availability[_.keys(item.availability)[0]] == '1' ? true : false);
            setAvailability(availabilityStatus);
        }
    }, [item])
    
    return(
        <View style={styles.cardContainer}>
            <View style={styles.rowContainer}>
                <Text style={styles.textTitle}>{item.name}</Text>
                <Text style={[styles.textItalic, {color: (availability ? Colors.green : Colors.fontGrey)}]}>{availability ? "Available" : "Not Available"}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.textColor}>Level {item.level}</Text>
                <Text style={styles.textColor}>{item.capacity} Pax</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        backgroundColor: Colors.cream,
        borderRadius: 7
    },
    rowContainer: {
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTitle: {
        fontWeight: Fonts.headerTitle.fontWeight,
        fontSize: Fonts.headerTitle.fontSize,
    },
    textItalic: {
        fontStyle: 'italic',
    },
    textColor: {
        color: Colors.fontGrey
    }
})

export default React.memo(SchedulerCardItem);