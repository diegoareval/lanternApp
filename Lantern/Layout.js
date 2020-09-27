import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Layout = ({children, title}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View>{children}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: "center"
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: 'white',
  },
});

export default Layout;
