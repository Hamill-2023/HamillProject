import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function LoginPageGuide({ navigation }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleButtonPress = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleBirthdayChange = (text) => {
    setBirthday(text);
  };

  const handleStart = () => {
    navigation.navigate('HomePage', { name, birthday });
}
  

  return (
    <View>
      <Text>보호자이신가요?</Text>
      <Button title="네" onPress={handleButtonPress} />

      {isFormVisible && (
        <View style={styles.formContainer}>
          <TextInput
            placeholder="이름"
            onChangeText={handleNameChange}
            value={name}
            style={styles.input}
          />
          <TextInput
            placeholder="생년월일"
            onChangeText={handleBirthdayChange}
            value={birthday}
            style={styles.input}
          />
          <Button
            title="계속하기"
            onPress={handleStart}
          />
        </View>
      )}

      {!isFormVisible && (
        <Button title="아니오" onPress={handleStart} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default LoginPageGuide;
