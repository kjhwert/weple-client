import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import RadioButtonRN from 'radio-buttons-react-native';
import AlertContext from '../module/context/AlertContext';

interface IProps {
  modify: () => void;
  destroy: () => void;
}

export default ({modify, destroy}: IProps) => {
  const {setAlertInvisible}: any = useContext(AlertContext);
  const [state, setState] = useState({
    label: '수정',
    value: 'modify',
  });

  const confirmed = () => {
    if (state.value === 'modify') {
      modify();
      return setAlertInvisible();
    }

    destroy();
  };

  return (
    <Container>
      <Title>수정 및 삭제</Title>
      <RadioButtonRN
        box={false}
        circleSize={9}
        activeColor={'#187fe2'}
        textStyle={{
          fontSize: 14,
          color: '#919191',
          padding: 3,
        }}
        initial={1}
        data={[
          {label: '수정', value: 'modify'},
          {label: '삭제', value: 'destroy'},
        ]}
        selectedBtn={(e) => setState(e)}
      />
      <CheckButton onPress={confirmed}>
        <CheckButtonText>확인</CheckButtonText>
      </CheckButton>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  width: 100%;
  padding: 20px;
  height: 100%;
`;

const Title = styled.Text`
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
  align-self: center;
  align-items: center;
  padding: 10px;
  background-color: #007bf1;
  position: absolute;
  bottom: 10px;
`;

const CheckButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
