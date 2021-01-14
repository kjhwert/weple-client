import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {StartNextBtn} from '../../../components/CommonBtn';
import RadioButtonRN from 'radio-buttons-react-native';

interface IProps {
  navigation: any;
}

export default ({navigation, radioBoxData}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <MethodWrapper>
          <MethodTitle>모집방식을 선택해주세요.</MethodTitle>
          <RadioButtonRN
            box={false}
            circleSize={8}
            activeColor={'#187fe2'}
            textStyle={{
              fontSize: 15,
              color: '#919191',
              padding: 3,
            }}
            data={radioBoxData}
          />
          <MethodInfoText>비공개 모집시 초대를 통해서만 모집할 수 있습니다.</MethodInfoText>
        </MethodWrapper>
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
