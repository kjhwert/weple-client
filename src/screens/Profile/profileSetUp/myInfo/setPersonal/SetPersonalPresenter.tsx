import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Switch} from 'react-native';

interface IProps {
  navigation: any;
  isNew: boolean;
}

export default ({navigation}: IProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  console.log(isEnabled);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <PersonalWrapper>
              <PersonalTextWrapper>
                <PersonalTitle>비공개 계정</PersonalTitle>
                <PersonalContent>
                  {
                    '비공개 상태에서는 승인된 팔로워만 당신의 활동을 볼 수 있어요. 기존의 팔로워에겐 영향이 없습니다.'
                  }
                </PersonalContent>
              </PersonalTextWrapper>
              <Switch
                trackColor={{false: '#c1c1c1', true: '#007bf1'}}
                thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#c1c1c1"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </PersonalWrapper>
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.View`
  height: 100%;
  background-color: #fff;
`;

const ScrollWrapper = styled.ScrollView``;

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const PersonalWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #eee;
  padding: 10px 20px;
`;

const PersonalTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 75%;
  margin-right: 5px;
`;

const PersonalTitle = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const PersonalContent = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #999;
  text-align: left;
`;
