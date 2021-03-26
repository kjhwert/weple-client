import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ACTIVE_BUTTON} from './module/common';

export default () => {
  const [text, setText] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);

  const onChangeText = (e: string) => {
    const lastWord = e.substr(e.length - 1, 1);
    if (!/\S/.test(lastWord)) {
      const newTags = tags.concat(`#${e.trim()}`);
      setTags(newTags);
      return setText('');
    }
    setText(e);
  };

  const deleteTag = (idx: number) => {
    const newTags = tags.filter((tag, index) => idx !== index);
    setTags(newTags);
  };

  return (
    <View style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Text>태그</Text>
      <View style={{display: 'flex', width: '100%', borderColor: 'red', borderWidth: 1, padding: 5}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {tags.map((tag, idx) => (
            <TouchableOpacity
              onPress={() => deleteTag(idx)}
              key={idx}
              style={{backgroundColor: ACTIVE_BUTTON, height: 25, marginRight: 5, marginBottom: 5, padding: 5}}>
              <Text style={{color: 'white'}}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          multiline={true}
          editable={true}
          style={{width: '100%', height: 100, padding: 0}}
        />
      </View>
    </View>
  );
};
