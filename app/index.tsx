import React, { useState } from 'react';
import { FlatList, Image, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageOption from '~/components/ImageOption';
import question from '~/assets/data/oneQuestionWithOption';
import CustomButton from '~/components/CustomButton';

type Option = {
  id: string;
  image: string;
  text: string;
};

export default function Home() {
  const [selected, setSelected] = useState<Option | null>(null);

  const onButtonPress = () => {
    console.warn('Pasirinktas atsakymas', selected?.text);
  };

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center p-3">
      <StatusBar animated barStyle={'light-content'} />
      <Text className="mb-4 text-center text-lg font-bold">{question.question}</Text>

      <View className="w-full flex-1 flex-row flex-wrap justify-between gap-2">
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <CustomButton text="Patvirtinti" onPress={onButtonPress} disabled={!selected} />
    </SafeAreaView>
  );
}
