import React from 'react';
import styled from 'styled-components/native';

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
            {inquiryList.map((item, idx) => (
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
                  <AskDateText>{item.requestDate}</AskDateText>
                </AskTextWrapper>

                <FollowBtn backgroundColor={item.requestStatus}>
                  <FollowBtnText>{item.requestStatus ? '답변완료' : '미답변'}</FollowBtnText>
                </FollowBtn>
              </AskWrapper>
            ))}
          </Card>
        </ScrollWrapper>
      </ScrollContainer>

      <NextBtn
        onPress={() => {
          navigation.navigate('setAskWrite');
        }}>
        <NextText>문의하기</NextText>
      </NextBtn>
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
  padding: 5px 0;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AskText = styled.Text`
  width: 100%;
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

const NextBtn = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
