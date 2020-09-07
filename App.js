import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleComponent from "./Components/TitleComponent";
import StateButton from "./Components/StateEventHandlerComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hej Eline</Text>
      <StatusBar style="auto" />
      <TitleComponent title = 'Første title'/>
      <TitleComponent title = 'Anden title'/>
      <StateButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
