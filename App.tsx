import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import QuickActions from 'react-native-quick-actions';
export default function App() {
  useEffect(() => {
    QuickActions.setShortcutItems([
      {
        type: 'Orders', // Required
        title: 'Payment Mode', // Optional, if empty, `type` will be used instead
        subtitle: "See orders you've made",
        icon: 'Compose', // Icons instructions below
        userInfo: {
          url: 'app://orders', // Provide any custom data like deep linking URL
        },
      },
    ]);
  });
  return (
    <View>
      <Text>Hello Action Short Cut Applications</Text>
    </View>
  );
}
