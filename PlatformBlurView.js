import React from 'react';
import { View, Platform } from 'react-native';
import { BlurView } from 'expo';

const PlatformBlurView = ({ children, style }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView style={style} tint="default" intensity={100}>
        {children}
      </BlurView>
    );
  }
  return (
    <View style={[style, {backgroundColor: 'rgba(255,255,255,0.2)'}]}>
      {children}
    </View>
  );
};

export default PlatformBlurView;
