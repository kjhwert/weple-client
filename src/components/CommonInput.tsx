import React from 'react';
import styled from 'styled-components/native';

interface IColorChangeProps {
  borderColor: string;
}

export const InputBox = ({title = '', placeholder = '', name = '', onChange = {}, activeFlag = 0, value = ''}) => {
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
        autoFocus={true}
        value={value}
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
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
  font-size: 15px;
  color: #6f6f6f;
`;

export const PwChangeInput = ({title = '', placeholder = '', name = '', onChange = {}, activeFlag = 0, value = ''}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <PwChangeInputWrapper>
      <PwChangeInputTitle>{title}</PwChangeInputTitle>
      <PwChangeInputData
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        borderColor={borderColor}
        value={value}
      />
    </PwChangeInputWrapper>
  );
};

const PwChangeInputWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const PwChangeInputTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const PwChangeInputData = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
  font-size: 15px;
  color: #6f6f6f;
`;

export const DuplicateInputBox = ({
  title = '',
  placeholder = '',
  name = '',
  onChange = {},
  activeFlag = 0,
  value = '',
}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else borderColor = '#acacac';

  return (
    <DuplicateInputBoxWrapper>
      <DuplicateInputBoxTitle>{title}</DuplicateInputBoxTitle>
      <DuplicateInputBoxData
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        borderColor={borderColor}
        autoFocus={true}
        value={value}
      />
    </DuplicateInputBoxWrapper>
  );
};

const DuplicateInputBoxWrapper = styled.View`
  display: flex;
  width: 70%;
`;

const DuplicateInputBoxTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const DuplicateInputBoxData = styled.TextInput`
  padding: 5px 10px;
  border-bottom-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
  font-size: 15px;
  color: #6f6f6f;
`;

export const InputPasswordBox = ({
  title = '',
  placeholder1 = '',
  placeholder2 = '',
  name = '',
  onChange1 = {},
  onChange2 = {},
  activeFlag1 = 0,
  activeFlag2 = 0,
  value1 = '',
  value2 = '',
}) => {
  let borderColor1 = '';
  let borderColor2 = '';
  if (activeFlag1 > 0) borderColor1 = '#007bf1';
  else if (activeFlag1 < 0) borderColor1 = '#FF0000';
  else borderColor1 = '#acacac';

  if (activeFlag2 > 0) borderColor2 = '#007bf1';
  else if (activeFlag2 < 0) borderColor2 = '#FF0000';
  else borderColor2 = '#acacac';

  return (
    <InputBoxWrapper>
      <InputBoxTitle>{title}</InputBoxTitle>
      <InputBoxData
        name={name}
        placeholder={placeholder1}
        onChange={onChange1}
        borderColor={borderColor1}
        secureTextEntry={true}
        autoFocus={true}
        secureTextEntry={true}
        value={value1}
      />
      <InputBoxData
        name={name}
        placeholder={placeholder2}
        onChange={onChange2}
        borderColor={borderColor2}
        secureTextEntry={true}
        value={value2}
      />
    </InputBoxWrapper>
  );
};
