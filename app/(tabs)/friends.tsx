import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const search = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40, padding: 5}}
        placeholder="Search Friends"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

export default search;