import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Switch} from 'react-native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [isScreen, seIsScreen] = useState();
  const toggleScreenSwitch = () =>
    seIsScreen((previousState) => !previousState);

  return (
    <Container>
      <Card>
        <SetBtnWrapper>
          <SetBtn
            onPress={() => {
              navigation.navigate('recordActiveType');
            }}>
            <SetUpListText>활동</SetUpListText>
            <SetUpActiveText>싸이클링</SetUpActiveText>
            <MoreImage source={require('../../../assets/set_more.png')} />
          </SetBtn>
        </SetBtnWrapper>

        <AlarmSetWrapper>
          <AlarmSetTextWrapper>
            <AlarmSetTitle>화면 계속 켜두기</AlarmSetTitle>
            <AlarmSetContent>
              기록하는 중 화면이 꺼지는 것을 방지합니다.
            </AlarmSetContent>
          </AlarmSetTextWrapper>
          <Switch
            trackColor={{false: '#c1c1c1', true: '#007bf1'}}
            thumbColor={isScreen ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#c1c1c1"
            onValueChange={toggleScreenSwitch}
            value={isScreen}
          />
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
  font-size: 13px;
  text-align: left;
  color: #333333;
  width: 34%;
`;

const SetUpActiveText = styled.Text`
  font-size: 11px;
  text-align: right;
  color: #7f7f7f;
  width: 60%;
`;

const MoreImage = styled.Image`
  width: 15px;
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
  font-size: 13px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const AlarmSetContent = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #7f7f7f;
`;
