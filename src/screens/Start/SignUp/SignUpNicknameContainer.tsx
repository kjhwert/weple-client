import React, {useState} from 'react';
import SignUpNicknamePresenter from './SignUpNicknamePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [usableAlert, setUsableAlert] = useState(false);
  const [unusableAlert, setUnusableAlert] = useState(false);

  return (
    <SignUpNicknamePresenter
      navigation={navigation}
      usableAlert={usableAlert}
      setUsableAlert={setUsableAlert}
      unusableAlert={unusableAlert}
      setUnusableAlert={setUnusableAlert}
    />
  );
};
