import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScheduleScreen from "./Screens/ScheduleScreen";
const Stack = createNativeStackNavigator();

import { LogBox } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import Orderdetail from "./Screens/Orderdetail";


// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);
HomeScreen.js
// Ignore all log notifications:
LogBox.ignoreAllLogs();

const Base = () => {




  return (
    <SafeAreaProvider>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
          <Stack.Screen name="Orderdetail" component={Orderdetail} />


        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Base;
