import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SuitabilityGoOut() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize : 20, fontWeight : 'bold', marginBottom : 10}}>외출하기 좋은 날이에요!</Text>
        <View style={{flexDirection : 'row', marginBottom : 10}}>
            <View style={{
                backgroundColor : 'white',
                width : 150,
                height : 120,
                borderRadius : 20,
                marginRight : 5,
            }}>
            </View>
            <View style={{
                backgroundColor : 'white',
                width : 150,
                height : 120,
                borderRadius : 20,
                marginLeft : 5,
            }}>
            </View>
        </View>
        <View style={{flexDirection : 'row', marginBottom : 10}}>
            <View style={{
                backgroundColor : 'white',
                width : 150,
                height : 120,
                borderRadius : 20,
                marginRight : 5,
            }}>
            </View>
            <View style={{
                backgroundColor : 'white',
                width : 150,
                height : 120,
                borderRadius : 20,
                marginLeft : 5,
            }}>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        margin : 20,
        borderRadius : 20,
        height : 300,
    },
    BoxFineDust : {
        backgroundColor : 'white',
        width : 150,
        height : 120,
        borderRadius : 20,
        margin : 10,
    }
});

export default SuitabilityGoOut;