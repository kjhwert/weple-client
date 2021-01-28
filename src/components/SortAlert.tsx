import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import AlertContext from '../module/context/AlertContext';
import RadioButtonRN from 'radio-buttons-react-native';

interface IProps {
  sortType: any;
  checked?: () => void;
}

export default ({sortType, checked}: IProps) => {
  const {setAlertInvisible}: any = useContext(AlertContext);
  const [sortData, setSortData] = useState(sortType);

  const checkOnPressed = () => {
    checked && checked();
    setAlertInvisible();
  };

  return (
    <>
      <Wrapper>
        <AlertTitleText>정렬</AlertTitleText>
        <RadioButtonRN
          box={false}
          circleSize={9}
          activeColor={'#007bf1'}
          textStyle={{
            fontSize: 14,
            color: '#919191',
            padding: 3,
          }}
          data={sortData}
        />
      </Wrapper>
      <CheckButton onPress={checkOnPressed}>
        <CheckButtonText>확인</CheckButtonText>
      </CheckButton>
    </>
  );
};

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const AlertTitleText = styled.Text`
  font-size: 15px;
  color: #121212;
  font-weight: bold;
  text-align: left;
  margin-left: 3px;
  margin-bottom: 5px;
`;

const CheckButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const CheckButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
