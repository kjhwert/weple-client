import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

interface IColorChangeProps {
  borderColor: string;
}

export const InputBox = ({title = '', placeholder = '', name = '', onChange = () => {}, activeFlag = 0, value}) => {
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

export const InputBox2 = ({title = '', placeholder = '', name = '', onChange = () => {}, activeFlag = 0, value}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <InputBoxWrap>
      <InputBoxTitleData>{title}</InputBoxTitleData>
      <InputBoxDescriptionData
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        borderColor={borderColor}
        value={value}
      />
    </InputBoxWrap>
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

export const InputBtnBox = ({
  onPress,
  title = '',
  placeholder = '',
  name = '',
  onChange = () => {},
  activeFlag = 0,
  value,
}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <InputBtnWrap onPress={onPress}>
      <InputBtnTitle>{title}</InputBtnTitle>
      <View pointerEvents="none">
        <InputBtnData
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          borderColor={borderColor}
          autoFocus={true}
          value={value}
        />
      </View>
    </InputBtnWrap>
  );
};

const InputBtnWrap = styled.TouchableOpacity`
  display: flex;
  width: 100%;
`;

const InputBtnTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const InputBtnData = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
  font-size: 15px;
  color: #6f6f6f;
`;

export const TextTitleBox = ({placeholder = '', name = '', onChange = () => {}, activeFlag = 0, value}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <InputBoxWrapper>
      <InputDataBox
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        borderColor={borderColor}
        autoFocus={true}
        multiline={true}
        value={value}
      />
    </InputBoxWrapper>
  );
};

const InputDataBox = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
  font-size: 15px;
  font-weight: bold;
  color: #222;
`;

export const TextBox = ({title = '', placeholder = '', name = '', onChange = () => {}, activeFlag = 0, value}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <InputBoxWrapper>
      <TextBoxTitle>{title}</TextBoxTitle>
      <TextBoxData
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        borderColor={borderColor}
        multiline={true}
        textAlignVertical={'top'}
      />
    </InputBoxWrapper>
  );
};

const TextBoxTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const TextBoxData = styled.TextInput`
  width: 100%;
  height: 150px;
  max-height: 150px;
  padding: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
  font-size: 15px;
  color: #6f6f6f;
`;

export const TextLimitBox = ({title = '', placeholder = '', name = '', onChange = () => {}, activeFlag = 0, value}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <TextLimitWrapper>
      <TextLimitTitle>{title}</TextLimitTitle>
      <TextLimitData
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        borderColor={borderColor}
        multiline={true}
        maxLength={100}
        textAlignVertical={'top'}
      />
    </TextLimitWrapper>
  );
};

const TextLimitWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const TextLimitTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const TextLimitData = styled.TextInput`
  width: 100%;
  height: 100px;
  max-height: 100px;
  padding: 10px;
  margin-bottom: 100px;
  border-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#b5b5b5')};
  font-size: 14px;
  color: #6f6f6f;
`;

export const TextTagBox = ({title = '', placeholder = '', name = '', onChange = () => {}, activeFlag = 0, value}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <TextTagWrapper>
      <TextTagTitle>{title}</TextTagTitle>
      <TextTagData
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        borderColor={borderColor}
        multiline={true}
        textAlignVertical={'top'}
      />
      {/* <TextTags ></TextTags> */}
    </TextTagWrapper>
  );
};

const TextTagWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const TextTagTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  padding: 20px 0 5px 0;
`;

const TextTagData = styled.TextInput`
  width: 100%;
  height: 100px;
  max-height: 100px;
  padding: 10px;
  margin-bottom: 100px;
  border-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#b5b5b5')};
  font-size: 15px;
  color: #6f6f6f;
`;

const TextTags = styled.Text`
  font-size: 12px;
  color: #ffffff;
  background-color: #007bf1;
  width: 5%;
  max-width: 100%;
  padding: 5px;
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

export const PwChangeInput2 = ({
  title = '',
  placeholder = '',
  name = '',
  onChange = {},
  activeFlag = 0,
  value = '',
}) => {
  let borderColor = '';
  if (activeFlag > 0) borderColor = '#007bf1';
  else if (activeFlag < 0) borderColor = '#FF0000';
  else borderColor = '#acacac';

  return (
    <PasswordChangeWrapper>
      <PasswordChangeTitle>{title}</PasswordChangeTitle>
      <PasswordChangeData
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        borderColor={borderColor}
        secureTextEntry={true}
        value={value}
      />
    </PasswordChangeWrapper>
  );
};

const PasswordChangeWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const PasswordChangeTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const PasswordChangeData = styled.TextInput`
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
