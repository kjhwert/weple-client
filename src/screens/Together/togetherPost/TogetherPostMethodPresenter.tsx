import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {StartNextBtn} from '../../../components/CommonBtn';
import RadioButtonRN from 'radio-buttons-react-native';
import TogetherContext from '../../../module/context/TogetherContext';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ACTIVE_BUTTON} from '../../../module/common';

interface IProps {
  navigation: any;
  activeFlag: any;
  radioBoxData: any;
}

export default ({navigation, radioBoxData}: IProps) => {
  const {createRoom, pickTogetherPublic, addTags, deleteTags}: any = useContext(TogetherContext);

  const [tagText, setTagText] = useState('');

  const onChangeText = (e: string) => {
    const lastWord = e.substr(e.length - 1, 1);
    if (!/\S/.test(lastWord)) {
      addTags(`#${e.trim()}`);
      return setTagText('');
    }
    setTagText(e);
  };

  return (
    <Container>
      <ContainerCard>
        <MethodWrapper>
          <MethodTitle>모집방식을 선택해주세요.</MethodTitle>
          <RadioButtonRN
            initial={1}
            box={false}
            circleSize={8}
            activeColor={'#007bf1'}
            deactiveColor={'#919191'}
            textStyle={{
              fontSize: 15,
              color: '#919191',
              padding: 3,
            }}
            data={radioBoxData}
            name="isPublic"
            value={createRoom.isPublic}
            selectedBtn={(e) => pickTogetherPublic(e)}
          />
          <MethodInfoText>비공개 모집시 초대를 통해서만 모집할 수 있습니다.</MethodInfoText>
        </MethodWrapper>

        <MethodTagWrapper>
          <MethodTagTitle>태그를 입력하세요.</MethodTagTitle>
          <View style={{display: 'flex', width: '100%', padding: 5}}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {createRoom.togetherTags.map((tag, idx) => (
                <TouchableOpacity
                  onPress={() => deleteTags(idx)}
                  key={idx}
                  style={{backgroundColor: ACTIVE_BUTTON, height: 25, marginRight: 5, marginBottom: 5, padding: 5}}>
                  <Text style={{color: 'white'}}>{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <MethodTagInput
              value={tagText}
              onChangeText={onChangeText}
              multiline={true}
              editable={true}
              style={{width: '100%', height: 100, padding: 0}}
            />
          </View>
        </MethodTagWrapper>
      </ContainerCard>
      <StartNextBtn text={'다음'} StartNextPage={'togetherPostActivity'} navigation={navigation} isActive={true} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const MethodWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const MethodTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #6f6f6f;
  margin-bottom: 5px;
`;

const MethodInfoText = styled.Text`
  font-size: 11px;
  color: #69b6ff;
  font-weight: bold;
  text-align: left;
  padding: 10px 20px;
`;

const MethodTagWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const MethodTagTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  padding: 20px 0 5px 0;
`;

const MethodTagInput = styled.TextInput`
  width: 100%;
  height: 100px;
  max-height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #b5b5b5;
  font-size: 15px;
  color: #6f6f6f;
`;
