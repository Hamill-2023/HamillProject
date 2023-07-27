import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

function WeatherPage({navigation}) {
  return (
    <>
    <View style={styles.container}>
      <ScrollView >
          <View style={styles.box1}>
          
          </View>

          <View style={styles.box2}>

          </View>
          <View style={styles.box3}>

          </View>
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  box1 : { 
    flex: 1, 
    height : 250,
    width : 350,
    backgroundColor : 'skyblue',
    marginBottom : 20,
    marginTop : 20,
    borderRadius : 30
  },
  box2 : {
    flex : 2,
    backgroundColor : 'skyblue',
    height : 100,
    width : "100%",
    borderRadius : 30

  },
  box3 : {
    flex : 3,
    backgroundColor : 'skyblue',
    height : 500,
    width : "100%",
    marginBottom : 20,
    marginTop : 20,
    borderRadius : 30
  },
});

export default WeatherPage;