import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Ultra Modern Home</Text>
            </View>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.image}>
                    <Text style={styles.price}>$1,000,000</Text>
                    <View>
                        <Text style={styles.year}>2016</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>This is the description</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 5,
        height: 300,
        margin: 10
      },
      titleContainer: {
        height: '15%',
        padding: 10
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray'
      },
      imageContainer: {
        width: '100%',
        height: '65%',
        overflow: 'hidden'
      },
      image: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      },
      price: {
        fontSize: 30,
        color: '#fff',
        margin: 10
      },
      year: {
        margin: 10,
        backgroundColor: '#2652B0',
        height: 25,
        width: 80,
        borderRadius: 5
      },
      yearText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
      },
      description: {
        margin: 10
      },
      descriptionText: {
        fontSize: 16,
        color: 'gray'
      }
})

export default Card;