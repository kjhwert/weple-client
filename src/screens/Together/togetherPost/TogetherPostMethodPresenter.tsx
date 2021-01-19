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
            activeColor={'#007bf1'}
            textStyle={{
              fontSize: 15,
              color: '#919191',
              padding: 3,
            }}
            data={radioBoxData}
          />
          <MethodInfoText>비공개 모집시 초대를 통해서만 모집할 수 있습니다.</MethodInfoText>
        </MethodWrapper>

        <MethodTagWrapper>
          <MethodTagTitle>태그를 입력하세요.</MethodTagTitle>
          <MethodTagInput multiline={true} textAlignVertical={'top'}>
            <TagText>#</TagText>
          </MethodTagInput>
        </MethodTagWrapper>
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

const MethodTagWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const MethodTagTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  padding: 20px 0 5px 0;
`;

const MethodTagInput = styled.TextInput`
  /* width: 100%; */
  /* height: 100px; */
  max-height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #b5b5b5;
  font-size: 15px;
  color: #6f6f6f;
  shadow-opacity: 0.3;
  shadow-color: #b5b5b5;
  shadow-offset: 2px 2px;
`;

const TagText = styled.Text`
  font-size: 12px;
  color: #ffffff;
  background-color: #007bf1;
  width: 5%;
  max-width: 100%;
  padding: 5px;
  line-height: 20px;
`;
