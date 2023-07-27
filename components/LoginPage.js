import React from 'react';
import { Button, Text, View } from 'react-native';

function LoginPage({navigation}) {
  return (
    <View>
        <Text>LoginPage</Text>
        <Button title="Login" 
          onPress={() => navigation.navigate('LoginPageGuide')} />
    </View>
  );
};

export default LoginPage;