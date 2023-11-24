import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>App Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    width: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 16
  }
});

export default Footer;
