import React, {useState, useContext, useEffect} from 'react';
import SignUpEmailPresenter from './SignUpEmailPresenter';
import {userApi} from '../../../module/api';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createUser, emailUserData}: any = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);
  const [userEmail, setUserEmail] = useState({
    data: '',
    activeFlag: 0,
  });

  const [alertFrame, setAlertFrame] = useState({
    showAlert: false,
    usable: false,
  });

  const userEmailChange = (e) => {
    const value = e.nativeEvent.text;
    setUserEmail({
      ...userEmail,
      data: value,
      activeFlag: value.length,
    });
    setIsActive(false);
  };

  const userEmailValidation = () => {
    // \w+([.-]?\w+)* 는 @기호 앞에 이메일의 사용자 이름을 일치시키는데 사용
    // \w+([.-]?\w+)* 는 위와 같이 사용자 이름과 동일한 패턴으로 이메일 도메인 이름을 일치시키는데 사용
    // .\w{2,3}+ 에서 .뒤에는 2~3개의 단어가 오고(예: ".com", ".edu", ".us", ".uk", ".co")
    // +는 위의 표현식이 한 번 이상 발생하도록 지정(예: ".com", ".co.uk", ".edu.sg")
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.data)) {
      setUserEmail({...userEmail, activeFlag: -1});
      return false;
    }
    return true;
  };

  const createUserEmail = () => {
    emailUserData(userEmail.data, false);
  };

  const clearAlertFrame = () => {
    setAlertFrame({
      ...alertFrame,
      showAlert: false,
    });
  };

  const hasEmail = async () => {
    if (!userEmailValidation()) {
      setAlertFrame({showAlert: true, usable: false});
      return;
    }

    const data = await userApi.hasEmail(userEmail.data);
    if (data.statusCode === 200) {
      setAlertFrame({showAlert: true, usable: true});
      setIsActive(true);
      return;
    } else {
      setAlertFrame({showAlert: true, usable: false});
      setIsActive(false);
      return;
    }
  };

  useEffect(() => {
    setUserEmail({
      ...userEmail,
      data: createUser.email,
    });
  }, []);

  return (
    <SignUpEmailPresenter
      navigation={navigation}
      userEmailChange={userEmailChange}
      userEmailValidation={userEmailValidation}
      userEmail={userEmail}
      isActive={isActive}
      createUserEmail={createUserEmail}
      alertFrame={alertFrame}
      clearAlertFrame={clearAlertFrame}
      hasEmail={hasEmail}
    />
  );
};
