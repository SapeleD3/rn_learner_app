import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>child 1</Text>
      <Text style={styles.textStyle2}>child 2</Text>
      <Text style={styles.textStyle3}>child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: 'red',
    // marginVertical: 20,
    // marginHorizontal: 20,
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: 'red',
    ...StyleSheet.absoluteFillObject,
    // marginVertical: 20,
    // marginHorizontal: 20,
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: 'red',
    // marginVertical: 20,
    // marginHorizontal: 20,
  },
});

export default BoxScreen;
