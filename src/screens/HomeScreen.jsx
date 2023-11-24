import React, { useState } from 'react';
import { Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout'; // Import MainLayout

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    if (taskText) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

export default HomeScreen;
