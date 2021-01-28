import React, {useContext, useState, useEffect} from 'react';
import TogetherPostPlacePresenter from './TogetherPostPlacePresenter';
import TogetherContext from '../../../module/context/TogetherContext';
import AlertContext from '../../../module/context/AlertContext';
import CheckAlert from '../../../components/CheckAlert';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createRoom, pickTogetherDate}: any = useContext(TogetherContext);
  const {setAlertVisible}: any = useContext(AlertContext);

  const [activeFlag, setActiveFlag] = useState({
    togetherDateFlag: 0,
    togetherPlaceFlag: 0,
    maxMemberFlag: 0,
    togetherPriceFlag: 0,
  });
  const [isActive, setIsActive] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    pickTogetherDate(date);
  };

  const maxMemberValidation = () => {
    // 숫자 체크
    if (!/^[0-9]*$/.test(createRoom.maxMember)) {
      setActiveFlag({...activeFlag, maxMemberFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '인원은 숫자로 입력하세요.',
            description: '',
          }}
          checked={() => {}}
        />,
      );
      return false;
    }
    return true;
  };

  const togetherPriceValidation = () => {
    if (!createRoom.togetherPrice || createRoom.togetherPrice === 0) {
      return true;
    }
    if (!/^[0-9]*$/.test(createRoom.togetherPrice)) {
      setActiveFlag({...activeFlag, togetherPriceFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '참가비는 숫자로 입력하세요.',
            description: '',
          }}
          checked={() => {}}
        />,
      );
      return false;
    }
    return true;
  };

  const blankValidation = () => {
    if (createRoom.togetherPlace.trim().length <= 0) {
      setActiveFlag({...activeFlag, togetherPlaceFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '시작할 위치는',
            description: '빈칸으로 시작할 수 없습니다.',
          }}
          checked={() => {}}
        />,
      );
      return false;
    }
    return true;
  };

  useEffect(() => {
    setActiveFlag({
      ...activeFlag,
      togetherDateFlag: createRoom.togetherDate ? 1 : 0,
      togetherPlaceFlag: createRoom.togetherPlace.length,
      maxMemberFlag: createRoom.maxMember.length,
      togetherPriceFlag: createRoom.togetherPrice.length,
    });
  }, [createRoom]);

  useEffect(() => {
    setIsActive(createRoom.togetherDate && createRoom.togetherPlace.length > 0 && createRoom.maxMember.length > 0);
  }, [createRoom]);

  return (
    <TogetherPostPlacePresenter
      navigation={navigation}
      activeFlag={activeFlag}
      isActive={isActive}
      maxMemberValidation={maxMemberValidation}
      togetherPriceValidation={togetherPriceValidation}
      blankValidation={blankValidation}
      isDatePickerVisible={isDatePickerVisible}
      showDatePicker={showDatePicker}
      hideDatePicker={hideDatePicker}
      handleConfirm={handleConfirm}
    />
  );
};
