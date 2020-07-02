import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Theme, Fonts, Colors } from '../Theme/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Button/button';
import PropTypes from 'prop-types';

const BottomSheetContainer = (props) => {
    const {onApply, onReset, sortBy} = props;
    const containerListItems = [{title:"Capacity", id:'capacity'}, {title:"Availability", id:'availability'}];
    const [selectedItem, setSelectedItem] = useState(sortBy);

    const onAction = (index) => {
        setSelectedItem(containerListItems[index]);
    }

    const resetAction = () => {
        setSelectedItem({});
        onReset({});
    }

    const applyAction = () => {
        onApply(selectedItem);
    }

    const ListItemRender = (props) => {
        const { title: {index, item}} = props;
        return(
            <View style={styles.selectionContainer}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => onAction(index)}>
                    <Icon name={item.title === selectedItem.title ? "checkbox-blank-circle" : "checkbox-blank-circle-outline"} size={20} style={styles.actionTitle}/>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleHeader}>Sort</Text>
            <FlatList
                data={containerListItems}
                renderItem={(item) => <ListItemRender title={item} />}
                keyExtractor={(item, index) => {
                    return index.toString();
                  }}
            />
            <View style={styles.buttonContainer}>
                <View style={[{flex: 3, backgroundColor: Colors.darkGrey}, styles.button]}>
                    <Button title="Reset" onPress={() => resetAction()} />    
                </View>
                <View style={[{flex: 1}]} />
                <View style={[{flex: 5, backgroundColor: Colors.buttonPrimary}, styles.button]}>
                    <Button title="Apply" onPress={() => applyAction()} /> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: Theme.leftSpacing,
        paddingRight: Theme.rightSpacing
    },
    titleHeader: {
        fontSize: Fonts.headerTitle.fontSize,
        fontWeight: Fonts.headerTitle.fontWeight,
        textAlign: 'center'
    },
    selectionContainer: {
        paddingTop: Theme.topSpacing,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Theme.topSpacing,
    },
    button: {
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        borderRadius: 20,
    }
});

BottomSheetContainer.propTypes = {
    onApply: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    sortBy: PropTypes.object.isRequired
}

export default BottomSheetContainer;

