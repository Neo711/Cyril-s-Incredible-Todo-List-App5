import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>App Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Header;
