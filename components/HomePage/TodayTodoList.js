import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TodayTodoList() {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}> 오늘의 할 일</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        margin : 20,
    },
    textStyle : {
        fontSize : 20,
        fontWeight : 'bold',
    }
});

export default TodayTodoList;