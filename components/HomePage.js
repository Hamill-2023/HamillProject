import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import HomeBoxComponent from "./HomePage/HomeBox";
import SuitabilityGoOut from "./HomePage/SuitabilityGoOut";
import TodayTodoList from "./HomePage/TodayTodoList";

const HomePage = ({ navigation }) => {

  return (
    <>
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('WeatherPage')}>
        <View style={styles.container}>
          <HomeBoxComponent />
        </View>
      </TouchableOpacity>
      <SuitabilityGoOut />
      <TodayTodoList />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

export default HomePage;