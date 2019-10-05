import React from 'react';
import {View, Text, Button, StyleSheet  } from 'react-native';

const MealDatailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Datail Screen!</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }}/>
         </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } 
}); 

export default MealDatailScreen; 