import React, {useState, useEffect} from 'react';
import SignUpEmailPresenter from './SignUpEmailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [isActive, setIsActive] = useState(false);
  const [userEmail, setUserEmail] = useState({
    data: '',
    activeFlag: 0,
  });

  const userEmailChange = (e) => {
    const value = e.nativeEvent.text;
    setUserEmail({
      ...userEmail,
      data: value,
      activeFlag: value.length,
    });
  };

  const userEmailValidation = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.data)) {
      setUserEmail({...userEmail, activeFlag: -1});
      return false;
    }
    return true;
  };

  useEffect(() => {
    setIsActive(userEmail.data.length > 0);
  }, []);

  return (
    <SignUpEmailPresenter
      navigation={navigation}
      userEmailChange={userEmailChange}
      userEmailValidation={userEmailValidation}
      userEmail={userEmail}
      isActive={isActive}
    />
  );
};
