import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Animated, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Popup = ({ visible, onClose }) => {
  const [animation] = useState(new Animated.Value(0));
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (visible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlay} onPress={onClose}>
          <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
            <Text style={styles.text}>Popup Screen</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text>제목</Text>
              <TextInput
                style={styles.submitTextInput}
                value={inputValue}
                onChangeText={text => setInputValue(text)}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <Text>알람</Text>
              <View style={{ width: '88%', height: 40 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <Text>위치</Text>
              <View style={{ width: '88%', height: 40 }} />
            </View>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Icon name="checkmark-outline" size={20} />
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: '80%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    position: "absolute",
    bottom: 16,
    backgroundColor: '#DDDDDD',
    padding: 8,
    borderRadius: 90,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  submitTextInput  :{
    marginLeft: 10,
    width: '85%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

export default Popup;