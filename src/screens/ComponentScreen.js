import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const ComponentScreen = ({ navigation }) => {
  return (
    <View>
      <Text styles={styles.text}>Component Screen!</Text>
      <Button  
        title='Goto Home'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentScreen;
