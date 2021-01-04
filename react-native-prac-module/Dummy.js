import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    BackHandler,
    Text,
    FlatList
} from 'react-native';

import Colors from '../Config/Colors';
import FocusAwareStatusBar from '../utils/FocusAwareStatusBar';
import { vh, vw } from '../utils/Dimension';
import BlueButton from '../CommonComponents/BlueButton';
import Fonts from '../utils/Fonts';

const Dummy = (props) => {

    return (
        <View style={styles.screen}>
            <Text>Hello</Text>
        </View>
    );

};

const styles = StyleSheet.create({

});

export default Dummy;
