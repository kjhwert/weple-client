import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  borderColor: string;
}

export const InputBox = ({
  title = '',
  placeholder = '',
  name = '',
  onChange = {},
  activeFlag = 0,
}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <InputBoxWrapper>
      <InputBoxTitle>{title}</InputBoxTitle>
      <InputBoxData
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        borderColor={borderColor}
      />
    </InputBoxWrapper>
  );
};

const InputBoxWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const InputBoxTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const InputBoxData = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${(props: IProps) =>
    props.borderColor ? props.borderColor : '#acacac'};
  font-size: 15px;
  color: #6f6f6f;
`;
