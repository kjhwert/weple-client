import React, {useRef} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import {StartNextBtn} from '../../../../../components/CommonBtn';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';

interface IProps {
  navigation: any;
  askData: any;
  onChangeAskData: Function;
  onCheckType: Function;
  askDataRegister: Function;
  isActive: any;
  typeData: any;
}

export default ({navigation, askData, onChangeAskData, onCheckType, askDataRegister, isActive, typeData}: IProps) => {
  const pickerRef = useRef();

  return (
    <Container>
      <ContainerCard>
        <ReactNativePickerModule
          pickerRef={pickerRef}
          value={askData.requestType}
          title={'문의 유형'}
          items={typeData}
          titleStyle={{color: '#000000', fontSize: 16}}
          itemStyle={{color: '#000000'}}
          selectedColor="#FC0"
          confirmButtonEnabledTextStyle={{color: '#007bf1'}}
          cancelButtonTextStyle={{color: '#FE2E2E', fontWeight: 'normal'}}
          confirmButton={'선택'}
          cancelButton={'취소'}
          onCancel={() => {
            // console.log('Cancelled');
          }}
          onValueChange={(value) => {
            onCheckType(value);
          }}
        />
        <TouchableOpacity style={styles.appButtonContainer} onPress={() => pickerRef.current.show()}>
          <Text style={styles.appButtonText}>
            {typeData.find((element) => element.value == askData.requestType)?.label}
          </Text>
          <Image source={require('../../../../../assets/icon_selected.png')} style={styles.moreIconImage} />
        </TouchableOpacity>
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
      <StartNextBtn
        text={'문의하기'}
        navigation={navigation}
        isActive={isActive}
        callBack={() => {
          askDataRegister();
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#bcbcbc',
    marginBottom: 10,
    width: '100%',
  },
  appButtonText: {
    fontSize: 13,
    color: '#333333',
  },
  moreIconImage: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 20,
    top: 12,
  },
});

const Container = styled.View`
  flex: 1;
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
