import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const ImageDetail = ({ title, imgsrc, imgscore }) => {
    return (
        <View>
            {/* image in the device */}
            <Image source={imgsrc} />
            <Text>{title}</Text>
            <Text>Image Score is - {imgscore}</Text>
        </View>
    );
}

    const styles = StyleSheet.create({});

export default ImageDetail;
