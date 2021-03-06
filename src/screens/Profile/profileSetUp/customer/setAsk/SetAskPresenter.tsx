import React from 'react';
import styled from 'styled-components/native';
import {StartNextBtn} from '../../../../../components/CommonBtn';
import {getTotalTime} from '../../../../../components/CommonTime';
import {Text, View} from 'react-native';

interface IProps {
  navigation: any;
  inquiryList: any;
}

export default ({navigation, inquiryList}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {inquiryList.length === 0 ? (
              <View style={{marginTop: 10}}>
                <Text>데이터가 없습니다.</Text>
              </View>
            ) : (
              inquiryList.map((item, idx) => (
                <AskWrapper key={idx}>
                  <AskTextWrapper>
                    <AskTextBtn
                      onPress={() => {
                        item.requestStatus
                          ? navigation.navigate('setAnswerDetail', {data: item})
                          : navigation.navigate('setAskDetail', {data: item});
                      }}>
                      <AskText>{item.requestTitle}</AskText>
                    </AskTextBtn>
                    <AskDateText>{getTotalTime(item.requestDate)}</AskDateText>
                  </AskTextWrapper>
                  <FollowBtn backgroundColor={item.requestStatus}>
                    <FollowBtnText>{item.requestStatus ? '답변완료' : '미답변'}</FollowBtnText>
                  </FollowBtn>
                </AskWrapper>
              ))
            )}
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn StartNextPage={'setAskWrite'} text={'문의하기'} navigation={navigation} isActive={true} />
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
  margin-bottom: 80px;
`;

const AskWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const AskTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 72%;
  height: 100%;
  margin-right: 5px;
`;

const AskTextBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row;
  padding: 5px 0;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AskText = styled.Text`
  width: 70%;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const AskDateText = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #7f7f7f;
`;

const FollowBtn = styled.TouchableOpacity`
  width: 23%;
  padding: 7px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({backgroundColor}: {backgroundColor: string}) => (backgroundColor ? '#00bbc7' : '#bcbcbc')};
`;

const FollowBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
