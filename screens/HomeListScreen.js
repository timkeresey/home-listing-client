import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {useDispatch} from 'react-redux';

import Card from '../components/Card';
import * as houseAction from '../redux/actions/houseAction';

const HomeListScreen = (props) => {

    const dispatch = useDispatch();

    const test = () => {
        fetch('http://localhost:3000/api/houses')
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        test();
    })
    // useEffect(() => {
    //     dispatch(houseAction.fetchHouses());
    // }, [dispatch]);

    return (
        <View style={styles.container}>
           <Card 
                navigation={props.navigation}
           />
           <FloatingAction
                position="right"
                animated={false}
                showBackground={false}
                onPressMain={() => props.navigation.navigate('AddHome')}
           />
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default HomeListScreen;