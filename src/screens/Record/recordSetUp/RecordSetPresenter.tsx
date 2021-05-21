import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Switch, Text, TouchableOpacity} from 'react-native';
import RecordContext2, {IRecordContext2} from '../../../module/context/RecordContext2';
import {ACTIVE_TEXT, FONT_SIZE_1, FONT_SIZE_2} from '../../../module/common';
import {openSettings} from 'react-native-permissions';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {
    state: {settings},
    onChangeSettingAwake,
  } = useContext(RecordContext2) as IRecordContext2;
  return (
    <Container>
      <Card>
        <SetBtnWrapper>
          <SetBtn
            onPress={() => {
              navigation.navigate('recordActiveType');
            }}>
            <SetUpListText>활동</SetUpListText>
            <SetUpActiveText>{!settings.activity.name ? '활동을 선택하세요' : settings.activity.name}</SetUpActiveText>
            <MoreImage source={require('../../../assets/set_more.png')} />
          </SetBtn>
        </SetBtnWrapper>

        <AlarmSetWrapper>
          <AlarmSetTextWrapper>
            <AlarmSetTitle>화면 계속 켜두기</AlarmSetTitle>
            <AlarmSetContent>기록하는 중 화면이 꺼지는 것을 방지합니다.</AlarmSetContent>
          </AlarmSetTextWrapper>
          <Switch
            trackColor={{false: '#c1c1c1', true: '#007bf1'}}
            thumbColor={settings.awake ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#c1c1c1"
            onValueChange={onChangeSettingAwake}
            value={settings.awake}
          />
        </AlarmSetWrapper>

        <AlarmSetWrapper>
          <AlarmSetTextWrapper>
            <AlarmSetTitle>백그라운드 기록하기</AlarmSetTitle>
            <AlarmSetContent>
              기록 중 다른 앱을 사용할 수 있도록 허용합니다. 위치 권한을 '항상 허용'으로 설정해주세요.
            </AlarmSetContent>
          </AlarmSetTextWrapper>
          <TouchableOpacity
            onPress={async () => {
              await openSettings();
            }}>
            <Text style={{color: ACTIVE_TEXT}}>설정</Text>
          </TouchableOpacity>
        </AlarmSetWrapper>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const SetBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px;
  border-bottom-width: 1px;
  border-color: #eeeeee;
`;

const SetBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const SetUpListText = styled.Text`
  font-size: ${FONT_SIZE_2}px;
  text-align: left;
  color: #333333;
  width: 34%;
`;

const SetUpActiveText = styled.Text`
  font-size: ${FONT_SIZE_1}px;
  text-align: right;
  color: #7f7f7f;
  width: 60%;
`;

const MoreImage = styled.Image`
  width: 8px;
  height: 12px;
`;

const AlarmSetWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const AlarmSetTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 72%;
  height: 100%;
  margin-right: 5px;
`;

const AlarmSetTitle = styled.Text`
  width: 100%;
  font-size: ${FONT_SIZE_2}px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const AlarmSetContent = styled.Text`
  width: 100%;
  font-size: ${FONT_SIZE_1}px;
  color: #7f7f7f;
`;
