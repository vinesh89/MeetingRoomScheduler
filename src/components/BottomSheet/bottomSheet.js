import React, {useRef, useEffect} from 'react';
import { Dimensions } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from '../Theme/index';
import PropTypes from 'prop-types';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const BottomSheet = (props) => {
    const refRBSheet = useRef(false);

    useEffect(() => {
        refRBSheet.current.open();
    });

    return(
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                draggableIcon: {
                    backgroundColor: '#ddd'
                },
                container: {
                    borderTopWidth: 1,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    borderColor: 'lightgrey',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
                    elevation: 8,
                }
            }}
            height={(SCREEN_HEIGHT * props.heightInpercentage)/100}
            onClose={props.closeSheet}
        >
            {props.children}
        </RBSheet>
    )
}

BottomSheet.defaultProps = {
    heightInpercentage: 45
}

BottomSheet.propTypes = {
    heightInpercentage: PropTypes.number.isRequired,
    closeSheet: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default BottomSheet;