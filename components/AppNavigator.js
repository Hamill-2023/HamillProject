import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import hamillLogo from "../image/HamillLogoHeader.png";
import HomePage from "./HomePage";
import DailyPage from "./DailyPage";
import LoginPage from "./LoginPage";
import LoginPageGuide from "./LoginPageGuide";
import WeatherPage from "./WeatherPage";
import MyPage from "./MyPage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      source={hamillLogo}
      style={{ width: 80, height: 30, resizeMode: "contain" }}
    />
  );
}

const MainTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitle: (props) => <LogoTitle />
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        tabBarLabel: "메인화면",
        tabBarIcon: () => (
          <Icon name="home-outline" size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Daily"
      component={DailyPage}
      options={{
        tabBarLabel: "일정화면",
        tabBarIcon: () => (
          <Icon name="today-outline" size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="MyPage"
      component={MyPage}
      options={{
        tabBarLabel: "내정보",
        tabBarIcon: () => (
          <Icon name="today-outline" size={20} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const isLoggedIn = false; // 여기에 로그인 상태에 따른 판단 로직을 추가합니다.

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="WeatherPage" component={WeatherPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="LoginPageGuide" component={LoginPageGuide} options={{ headerShown: false }} />
            <Stack.Screen name="HomePage" component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="WeatherPage" component={WeatherPage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
