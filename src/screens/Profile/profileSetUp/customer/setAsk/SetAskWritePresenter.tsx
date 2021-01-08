import React, {useState} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import AlertWrapper from '../../../../../components/AlertWrapper';
import DropdownMenu from 'react-native-dropdown-menu';

var AskType = [['싸이클링', '달리기', '걷기', '등산']];

interface IProps {
  navigation: any;
  onChangeAskData: Function;
  askDataRegister: Function;
}

export default ({navigation, onChangeAskData, askDataRegister}: IProps) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Container>
      {showAlert && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage source={require('../../../../../assets/alertCheck_icon.png')} />
          </AlertImageWrapper>
          <AlertTitleText>{'문의가 접수되었습니다.'}</AlertTitleText>
          <ConfirmButton
            onPress={() => {
              navigation.navigate('setAsk', {refresh: true});
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}
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
          <AskTitleInput
            placeholder="문의 제목을 입력해주세요."
            name="requestTitle"
            onChange={onChangeAskData}
            maxLength={100}
          />
          <AskInput
            placeholder="산업안전보건법에 따라 고객응대근로자 보호조치가 시행 중이며, 모든
            문의 내용은 기록으로 남습니다."
            multiline={true}
            textAlignVertical={'top'}
            name="requestDescription"
            onChange={onChangeAskData}
          />
        </AskWriteWrapper>
      </ContainerCard>

      <NextBtn
        onPress={() => {
          setShowAlert(true);
          askDataRegister();
        }}>
        <NextText>문의하기</NextText>
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const AlertImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

const AlertImage = styled.Image`
  width: 70px;
  height: 70px;
`;

const AlertTitleText = styled.Text`
  font-size: 14px;
  color: #181818;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
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
  color: #555555;
  margin-bottom: 10px;
`;

const AskInput = styled.TextInput`
  width: 100%;
  height: 350px;
  max-height: 350px;
  padding: 10px;
  margin-bottom: 100px;
  border-width: 1px;
  border-color: #bcbcbc;
  font-size: 13px;
  color: #787878;
`;

const NextBtn = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  align-items: center;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
