import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function MyPage({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontWeight : 'bold', marginLeft : 10}}>위지윤</Text>
        <Text style={{fontWeight : 'bold', marginLeft : 10}}>해밀@gmail.com</Text>
      </View>

      <TouchableOpacity onPress={() => Alert.alert('hi')}>
        <View style={styles.setting}>
          <Text style={{fontWeight : 'bold', marginLeft : 10,}}>설정
            <Icon name="chevron-forward-outline"/>
          </Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => Alert.alert('hi')}>
        <View style={styles.setting}>
          <Text style={{fontWeight : 'bold', marginLeft : 10}}>알람
            <Icon style={{marginLeft : 10,}}  name="chevron-forward-outline"/> 
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('hi')}>
        <View style={styles.setting}>
          <Text style={{fontWeight : 'bold', marginLeft : 10}}>계정 정보
          <Icon style={{marginLeft : 10,}}  name="chevron-forward-outline"/>
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('hi')}>
        <View style={styles.setting}>
          <Text style={{fontWeight : 'bold', marginLeft : 10}}>문의
            <Icon style={{marginLeft : 10,}}  name="chevron-forward-outline"/>
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('hi')}>
        <View style={styles.setting}>
          <Text style={{fontWeight : 'bold', marginLeft : 10}}>친구에게 해밀 소개해주기
          <Icon style={{marginLeft : 10,}}  name="chevron-forward-outline"/>
          </Text>
        </View>
      </TouchableOpacity>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: 'skyblue',
    width : '100%',
    height : 100,
    marginBottom : 10,
  },
  setting : {
    justifyContent : 'center',
    backgroundColor : 'skyblue',
    width : '100%',
    height : 50,
    marginBottom : 10,
  }
})

export default MyPage;