import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation, paymentData}: IProps) => {
  return (
    <Container>
      <Card>
        {paymentData.map((item, idx) => (
          <PayWrapper key={idx}>
            <PaymentTextWrapper>
              <PaymentBtn onPress={() => {}}>
                <PaymentTitle>{item.title}</PaymentTitle>
              </PaymentBtn>
              <PaymentDate>{item.date}</PaymentDate>
            </PaymentTextWrapper>
            <Payment>{item.money}원</Payment>
          </PayWrapper>
        ))}
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

const PayWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #eee;
  padding: 10px 20px;
`;

const PaymentTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;

const PaymentBtn = styled.TouchableOpacity`
  width: 100%;
`;

const PaymentTitle = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const PaymentDate = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #7f7f7f;
`;

const Payment = styled.Text`
  width: 20%;
  font-size: 11px;
  color: #7f7f7f;
  text-align: center;
`;
