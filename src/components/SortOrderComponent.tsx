import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import RadioButtonRN from 'radio-buttons-react-native';
import AlertContext from '../module/context/AlertContext';
import {IFeedPagination} from '../module/type/api';

interface IProps {
  sorts: Array<ISortOrder>;
  confirm: (sort: ISortOrder) => void;
  initial: number;
}

export interface ISortOrder {
  label: string;
  value: 'createdAt' | 'likeCount' | 'location';
}

export default ({sorts, confirm, initial}: IProps) => {
  const {setAlertInvisible}: any = useContext(AlertContext);
  const [state, setState] = useState(sorts[initial]);

  return (
    <Container>
      <Title>정렬</Title>
      <RadioButtonRN
        box={false}
        circleSize={9}
        activeColor={'#187fe2'}
        textStyle={{
          fontSize: 14,
          color: '#919191',
          padding: 3,
        }}
        initial={initial + 1}
        data={sorts}
        selectedBtn={(e: ISortOrder) => setState(e)}
      />
      <CheckButton
        onPress={() => {
          confirm(state);
          setAlertInvisible();
        }}>
        <CheckButtonText>적용</CheckButtonText>
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
