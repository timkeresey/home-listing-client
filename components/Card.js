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
    
})

export default Card;