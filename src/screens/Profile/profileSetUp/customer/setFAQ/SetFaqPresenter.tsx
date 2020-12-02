import React from 'react';
import styled from 'styled-components/native';

interface IProps {}

export default ({navigation, qnaData}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {qnaData.map((item, idx) => (
              <FaqWrapper key={idx}>
                <FaqBtnWrapper>
                  <FaqBtn onPress={() => {}}>
                    <FaqTitleText>{item.title}</FaqTitleText>
                  </FaqBtn>
                  <FaqAnswerText>{item.answer}</FaqAnswerText>
                </FaqBtnWrapper>
              </FaqWrapper>
            ))}
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
`;

const FaqWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 2px;
  border-color: #f3f3f3;
`;

const FaqBtnWrapper = styled.View`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const FaqBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 5px 0;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FaqTitleText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const FaqAnswerText = styled.Text`
  font-size: 11px;
  color: #7f7f7f;
  padding-bottom: 5px;
`;
