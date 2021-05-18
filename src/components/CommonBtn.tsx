import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  isActive: boolean;
  isSelect: boolean;
}

export const SnsBtn = ({text, imgPath, onPress, isSelect}) => {
  return (
    <SocialLogin onPress={onPress} isSelect={isSelect}>
      {imgPath ? <LogoImage source={imgPath} /> : <></>}
      <SocialLoginText>{text}</SocialLoginText>
    </SocialLogin>
  );
};

const LogoImage = styled.Image`
  width: 22px;
  height: 22px;
`;

const SocialLogin = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  border-width: 1px;
  border-color: ${(props: IProps) => (props.isSelect ? '#007bf1' : '#eee')};
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SocialLoginText = styled.Text`
  color: #333;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;

interface IPropsStartBtn {
  navigation?: Function;
  StartNextPage?: String;
  navigationRoute?: any;
  text: string;
  validation?: Function;
  callBack?: Function;
  isActive?: boolean;
}

export const StartNextBtn = ({
  navigation,
  StartNextPage,
  navigationRoute,
  text,
  validation,
  callBack,
  isActive,
}: IPropsStartBtn) => {
  const moveToPage = () => {
    if (!isActive) return;
    if (validation && !validation()) return;
    if (callBack) callBack();
    if (StartNextPage) navigation.navigate(StartNextPage, navigationRoute);
  };

  return (
    <ActiveButton onPress={moveToPage} isActive={isActive}>
      <ActiveButtonText>{text}</ActiveButtonText>
    </ActiveButton>
  );
};

const ActiveButton = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  align-items: center;
  background-color: ${(props: IProps) => (props.isActive ? '#007bf1' : '#b2b2b2')};
`;

const ActiveButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ModifyBtn = ({
  navigation,
  StartNextPage,
  navigationRoute,
  text,
  validation,
  callBack,
  isActive,
}: IPropsStartBtn) => {
  const moveToPage = () => {
    if (!isActive) return;
    if (validation && !validation()) return;
    if (callBack) callBack();
    if (StartNextPage) navigation.navigate(StartNextPage, navigationRoute);
  };

  return (
    <ModifyActiveBtn onPress={moveToPage} isActive={isActive}>
      <ModifyBtnText>{text}</ModifyBtnText>
    </ModifyActiveBtn>
  );
};

const ModifyActiveBtn = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  bottom: 55px;
  width: 100%;
  padding: 15px;
  align-items: center;
  background-color: ${(props: IProps) => (props.isActive ? '#007bf1' : '#b2b2b2')};
`;

const ModifyBtnText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const CategoryBtn = ({text = '', onPress = () => {}, isSelect = false}) => {
  return (
    <Category onPress={onPress} isSelect={isSelect}>
      <CategoryText isSelect={isSelect}>{text}</CategoryText>
    </Category>
  );
};

const Category = styled.TouchableOpacity`
  max-width: 40%;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${(props: IProps) => (props.isSelect ? '#007bf1' : '#bfbfbf')};
  padding: 10px;
  margin: 0 20px 10px 0;
`;

const CategoryText = styled.Text`
  color: ${(props: IProps) => (props.isSelect ? '#007bf1' : '#6f6f6f')};
  font-size: 14px;
  text-align: center;
`;
