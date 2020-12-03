import React from 'react';
import styled from 'styled-components/native';
import NextBtn from '../../../../../components/NextBtn';

interface IProps {
  navigation: any;
  isClick: boolean;
}

export default ({navigation, askList}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {askList.map((item, idx) => (
              <AskWrapper key={idx}>
                <AskTextWrapper>
                  <AskTextBtn
                    onPress={() => {
                      navigation.navigate('setAnswerDetail');
                    }}>
                    <AskText>{item.title}</AskText>
                  </AskTextBtn>
                  <AskDateText>{item.date}</AskDateText>
                </AskTextWrapper>

                <FollowBtn isClick={item.isClick}>
                  <FollowBtnText isClick={item.isClick}>
                    {item.isClick ? '답변완료' : '미답변'}
                  </FollowBtnText>
                </FollowBtn>
              </AskWrapper>
            ))}
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
      <NextBtn nextPage={'setAskWrite'} navigation={navigation}>
        {`문의하기`}
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
  background-color: ${(props: IProps) =>
    props.isClick ? '#00bbc7' : '#bcbcbc'};
`;

const FollowBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
