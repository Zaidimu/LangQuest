import { View, Text, Image } from 'react-native';
import React from 'react';

const ImageOption = ({ image, text }) => {
  return (
    <View
      className="h-[48%] w-[48%] items-center rounded-md rounded-b-ls border-2 border-gray-300 p-2">
      <Image source={{ uri: image }} className="w-[100%] flex-1" resizeMode="contain" />
      <Text className='text-base font-semibold'>{text}</Text>
    </View>
  );
};

export default ImageOption;
