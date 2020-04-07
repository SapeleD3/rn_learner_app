import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text styles={styles.text}>Hi there!</Text>
      <Button
        title="Goto Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Goto ImageScreen"
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Button
        title="Goto Counter Demo"
        onPress={() => navigation.navigate('CounterScreen')}
      />
      <Button
        title="Goto Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Goto Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Goto Text Input Demo"
        onPress={() => navigation.navigate('Input')}
      />
      <Button
        title="Goto Box Demo"
        onPress={() => navigation.navigate('BoxScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
