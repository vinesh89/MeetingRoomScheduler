import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Theme, Colors } from '../Theme/index';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SchedulerHeaderSection = (props) => {
    const { title, actionTitle, onAction } = props;
    return(
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <TouchableOpacity onPress={onAction} style={styles.actionContainer}>
                <View style={styles.actionContainer}>
                    <Text style={styles.actionTitle}>{actionTitle}</Text>
                    <Icon name="sort" size={20} style={styles.actionTitle}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flexDirection: 'row',
        paddingTop: Theme.topSpacing,
        justifyContent: 'space-between'
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionTitle: {
        color: Colors.light,
    },
    actionTitle: {
        fontWeight: 'bold',
        paddingLeft: 2,
        paddingRight: 2
    }
});

export default SchedulerHeaderSection;