import React from 'react';
import { View, Platform } from 'react-native';
import { BlurView } from 'expo-blur';

const PlatformBlurView = ({ children, style }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView style={style} tint="dark" intensity={50}>
        {children}
      </BlurView>
    );
  }
  return (
    <View style={[style, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
      {children}
    </View>
  );
};

export default PlatformBlurView;
