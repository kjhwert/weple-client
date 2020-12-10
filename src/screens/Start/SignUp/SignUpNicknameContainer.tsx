import React, {useState} from 'react';
import SignUpNicknamePresenter from './SignUpNicknamePresenter';
import {nickNameApi} from '../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [usableAlert, setUsableAlert] = useState(false);
  const [unusableAlert, setUnusableAlert] = useState(false);

  const [nickNameState, setNickNameState] = useState({
    nickName: '',
  });

  const hasNickName = async () => {
    const data = await nickNameApi.hasNickName(nickNameState.nickName);
    if (data.statusCode === 200) {
      console.log('닉네임 사용');
      setUsableAlert(true);
      return;
    } else {
      console.log('닉네임 중복');
      setUnusableAlert(true);
      return;
    }
  };

  const onChangeNickName = (e) => {
    const value = e.nativeEvent.text;
    setNickNameState({
      ...nickNameState,
      nickName: value,
    });
  };

  return (
    <SignUpNicknamePresenter
      navigation={navigation}
      usableAlert={usableAlert}
      unusableAlert={unusableAlert}
      nickNameState={nickNameState}
      onChangeNickName={onChangeNickName}
      hasNickName={hasNickName}
    />
  );
};
