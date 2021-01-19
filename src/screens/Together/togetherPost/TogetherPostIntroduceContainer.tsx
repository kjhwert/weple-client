import React, {useContext, useState, useEffect} from 'react';
import TogetherPostIntroducePresenter from './TogetherPostIntroducePresenter';
import TogetherContext from '../../../module/context/TogetherContext';
import AlertContext from '../../../module/context/AlertContext';
import CheckAlert from '../../../components/CheckAlert';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createRoom}: any = useContext(TogetherContext);
  const {setAlertVisible}: any = useContext(AlertContext);
  const clearAlert = () => {
    setAlertVisible();
  };

  const [activeFlag, setActiveFlag] = useState({
    titleFlag: 0,
    descriptionFlag: 0,
    recommendFlag: 0,
    noticeFlag: 0,
  });

  const [isActive, setIsActive] = useState(false);

  const titleValidation = () => {
    if (createRoom.title.length < 10) {
      setActiveFlag({...activeFlag, titleFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '제목을 10자 이상 입력하세요.',
            description: '',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
      return false;
    }
    return true;
  };

  const blankValidation = () => {
    if (createRoom.description.indexOf(' ') === 0) {
      setActiveFlag({...activeFlag, descriptionFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '소개는 빈칸으로 시작할 수 없습니다.',
            description: '',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
      return false;
    } else if (createRoom.recommend.indexOf(' ') === 0) {
      setActiveFlag({...activeFlag, recommendFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '추천은 빈칸으로 시작할 수 없습니다.',
            description: '',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
      return false;
    } else if (createRoom.notice.indexOf(' ') === 0) {
      setActiveFlag({...activeFlag, noticeFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '공지사항은',
            description: '빈칸으로 시작할 수 없습니다.',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
      return false;
    }
    return true;
  };

  useEffect(() => {
    setActiveFlag({
      ...activeFlag,
      titleFlag: createRoom.title.length,
      descriptionFlag: createRoom.description.length,
      recommendFlag: createRoom.recommend.length,
      noticeFlag: createRoom.notice.length,
    });
  }, [createRoom]);

  useEffect(() => {
    setIsActive(
      createRoom.title.length > 0 &&
        createRoom.description.length > 0 &&
        createRoom.recommend.length > 0 &&
        createRoom.notice.length > 0,
    );
  }, [createRoom]);

  return (
    <TogetherPostIntroducePresenter
      navigation={navigation}
      activeFlag={activeFlag}
      isActive={isActive}
      titleValidation={titleValidation}
      blankValidation={blankValidation}
    />
  );
};
