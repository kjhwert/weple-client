import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputBtnBox, InputBox2} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';
import {getTotalTime} from '../../../components/CommonTime';
import TogetherContext from '../../../module/context/TogetherContext';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface IProps {
  navigation: any;
  activeFlag: any;
  isActive: boolean;
  maxMemberValidation: Function;
  togetherPriceValidation: Function;
  blankValidation: Function;
  isDatePickerVisible: boolean;
  showDatePicker: () => void;
  hideDatePicker: (date: Date) => void;
  handleConfirm: (date: Date) => void;
}

export default ({
  navigation,
  activeFlag,
  isActive,
  maxMemberValidation,
  togetherPriceValidation,
  blankValidation,
  isDatePickerVisible,
  showDatePicker,
  hideDatePicker,
  handleConfirm,
}: IProps) => {
  const {createRoom, onChangeRoom, onChangePlace, onChangeMaxMember, onChangePrice}: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <PlaceWrapper>
              <InputWrap>
                <InputBtnBox
                  title={'모임 날짜, 시간을 선택해주세요. [필수]'}
                  placeholder="날짜와 시간을 선택해주세요."
                  name="meetingDate"
                  activeFlag={activeFlag.togetherDateFlag}
                  value={getTotalTime(createRoom.togetherDate)}
                  onPress={() => {
                    showDatePicker();
                  }}
                />
              </InputWrap>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                cancelTextIOS="취소"
                confirmTextIOS="확인"
                headerTextIOS="날짜/시간"
                mode="datetime"
                locale="ko"
                display="spinner"
                date={createRoom.togetherDate}
              />
              <InputBoxWrap>
                <InputBoxTitleData>시작할 위치를 입력해주세요. [필수]</InputBoxTitleData>
                <InputBoxDescriptionData
                  placeholder={'예) 서울역 3번출구 앞'}
                  onChangeText={onChangePlace}
                  value={createRoom.togetherPlace}
                />
              </InputBoxWrap>
              <InputBoxWrap>
                <InputBoxTitleData>최대 인원을 입력해주세요. [필수]</InputBoxTitleData>
                <InputBoxDescriptionData
                  placeholder={'숫자를 입력해주세요.'}
                  onChangeText={onChangeMaxMember}
                  value={createRoom.maxMember}
                />
              </InputBoxWrap>
              <InputBoxWrap>
                <InputBoxTitleData>참가비를 입력해주세요. [선택]</InputBoxTitleData>
                <InputBoxDescriptionData
                  placeholder={'원단위로 입력해주세요.'}
                  onChangeText={onChangePrice}
                  value={createRoom.togetherPrice}
                />
              </InputBoxWrap>
              <PlaceInfoText>참가비는 만나서 각자 사용할 예상 금액입니다.</PlaceInfoText>
            </PlaceWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn
        StartNextPage={'togetherPostmethod'}
        text={'다음'}
        navigation={navigation}
        isActive={isActive}
        validation={() => {
          return maxMemberValidation() && togetherPriceValidation() && blankValidation();
        }}
      />
    </Container>
  );
};

const InputBoxWrap = styled.View`
  display: flex;
  width: 100%;
`;

const InputBoxTitleData = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const InputBoxDescriptionData = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
  font-size: 15px;
  color: #6f6f6f;
`;

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.View`
  height: 100%;
  background-color: #fff;
`;

const ScrollWrapper = styled.ScrollView``;

const InputWrap = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row;
`;

const PlaceWrapper = styled.View`
  flex: 9;
  display: flex;
  width: 100%;
  margin-bottom: 100px;
`;

const PlaceInfoText = styled.Text`
  font-size: 11px;
  color: #69b6ff;
  font-weight: bold;
  text-align: left;
  bottom: 10px;
  padding: 0 5px;
`;
