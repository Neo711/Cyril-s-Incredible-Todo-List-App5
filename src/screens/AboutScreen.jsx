import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout'; // Import MainLayout

const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>App Name: [Your App Name]</Text>
        <Text style={styles.text}>Developed by: [Your Name]</Text>
        <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default AboutScreen;
