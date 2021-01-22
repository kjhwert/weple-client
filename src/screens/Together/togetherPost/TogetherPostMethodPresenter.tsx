import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {TextTagBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';
import RadioButtonRN from 'radio-buttons-react-native';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
  activeFlag: any;
  radioBoxData: any;
}

export default ({navigation, radioBoxData, activeFlag}: IProps) => {
  const {createRoom, pickTogetherPublic, tagData, onChangeTag}: any = useContext(TogetherContext);

  //////////////////////////

  //////////////////////////

  return (
    <Container>
      <ContainerCard>
        <MethodWrapper>
          <MethodTitle>모집방식을 선택해주세요.</MethodTitle>
          <RadioButtonRN
            initial={1}
            box={false}
            circleSize={8}
            activeColor={'#007bf1'}
            deactiveColor={'#919191'}
            textStyle={{
              fontSize: 15,
              color: '#919191',
              padding: 3,
            }}
            data={radioBoxData}
            name="isPublic"
            value={createRoom.isPublic}
            selectedBtn={(e) => pickTogetherPublic(e)}
          />
          <MethodInfoText>비공개 모집시 초대를 통해서만 모집할 수 있습니다.</MethodInfoText>
        </MethodWrapper>

        {/*  */}
        <></>
        {/*  */}

        <MethodTagWrapper>
          <TextTagBox
            title={'태그를 입력하세요.'}
            name="togetherTags"
            value={tagData}
            onChange={onChangeTag}
            activeFlag={activeFlag.togetherTagsFlag}
          />
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
