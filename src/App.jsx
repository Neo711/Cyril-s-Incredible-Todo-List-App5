import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    if (taskText) {
      setTasks([...tasks, taskText]);
    }
  };

  // Create a stack navigator
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
