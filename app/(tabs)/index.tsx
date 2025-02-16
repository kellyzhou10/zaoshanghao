import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createUser } from '../../firebase/firebaseConfig';

export default function Tab() {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
          createUser("kelly")
        }}
        title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
