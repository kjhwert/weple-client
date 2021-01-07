import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Switch} from 'react-native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [isPush, seIstPush] = useState();
  const [isEmail, setIsEmail] = useState();
  const togglePushSwitch = () => seIstPush((previousState) => !previousState);
  const toggleEmailSwitch = () => setIsEmail((previousState) => !previousState);

  return (
    <Container>
      <Card>
        <AlarmSetWrapper>
          <AlarmSetTextWrapper>
            <AlarmSetTitle>PUSH 알림</AlarmSetTitle>
            <AlarmSetContent>{'팔로워 활동, 소셜, 업데이트 등에 대한 알림을 받으세요.'}</AlarmSetContent>
          </AlarmSetTextWrapper>
          <Switch
            trackColor={{false: '#c1c1c1', true: '#007bf1'}}
            thumbColor={isPush ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#c1c1c1"
            onValueChange={togglePushSwitch}
            value={isPush}
          />
        </AlarmSetWrapper>

        <AlarmSetWrapper>
          <AlarmSetTextWrapper>
            <AlarmSetTitle>E-mail</AlarmSetTitle>
            <AlarmSetContent>{'팔로워 활동, 소셜, 업데이트 등에 대한 이메일을 받으세요.'}</AlarmSetContent>
          </AlarmSetTextWrapper>
          <Switch
            trackColor={{false: '#c1c1c1', true: '#007bf1'}}
            thumbColor={isEmail ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#c1c1c1"
            onValueChange={toggleEmailSwitch}
            value={isEmail}
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
  color: #999;
`;
