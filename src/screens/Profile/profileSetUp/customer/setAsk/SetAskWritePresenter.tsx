import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import NextBtn from '../../../../../components/NextBtn';
import DropdownMenu from 'react-native-dropdown-menu';

var AskType = [['싸이클링', '달리기', '걷기', '등산']];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <AskDetailTitle>문의 유형 Select Dropdown</AskDetailTitle>
        {/* <DropdownMenu
          style={{
            flex: 1,
            position: 'absolute',
          }}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}
          // checkImage={}
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}}
          // maxHeight={300}
          handler={(selection, row) => console.log(row)}
          data={AskType}></DropdownMenu> */}

        <AskWriteWrapper>
          <AskTitleInput placeholder="문의 제목을 입력해주세요." />
          <AskInput
            placeholder="산업안전보건법에 따라 고객응대근로자 보호조치가 시행 중이며, 모든
            문의 내용은 기록으로 남습니다."
            multiline={true}
          />
        </AskWriteWrapper>
      </ContainerCard>

      <NextBtn nextPage={'setAsk'} navigation={navigation}>
        {`문의하기`}
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const AskDetailTitle = styled.Text`
  width: 100%;
  padding: 5px 10px;
  border-width: 1px;
  border-color: #787878;
  font-size: 13px;
  margin-bottom: 10px;
`;

const AskWriteWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const AskTitleInput = styled.TextInput`
  width: 100%;
  padding: 5px 10px;
  border-width: 1px;
  border-color: #bcbcbc;
  font-size: 13px;
  color: #d0d0d0;
  margin-bottom: 10px;
`;

const AskInput = styled.TextInput`
  width: 100%;
  padding: 5px 10px;
  border-width: 1px;
  border-color: #bcbcbc;
  font-size: 13px;
  color: #cecece;
`;
