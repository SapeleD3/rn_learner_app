import {StyleSheet, Text, View} from 'react-native';

import ImageDetail from '../Components/ImageDetail';
import React from 'react';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imgsrc={require('../../assets/forest.jpg')}
        imgscore="9"
      />
      <ImageDetail
        title="Beach"
        imgsrc={require('../../assets/beach.jpg')}
        imgscore="7"
      />
      <ImageDetail
        title="Mountain"
        imgsrc={require('../../assets/mountain.jpg')}
        imgscore="10"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
