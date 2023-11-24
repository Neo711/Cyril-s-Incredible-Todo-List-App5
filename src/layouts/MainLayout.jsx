import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header'; // Import Header
import Footer from './Footer'; // Import Footer

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header /> {/* Include Header */}
      {children}
      <Footer /> {/* Include Footer */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
