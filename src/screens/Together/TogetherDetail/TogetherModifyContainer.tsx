import React, {useState, useEffect, useContext} from 'react';
import TogetherModifyPresenter from './TogetherModifyPresenter';
import {togetherApi} from '../../../module/api';
import AlertContext from '../../../module/context/AlertContext';
import CheckAlert from '../../../components/CheckAlert';
import ConfirmAlert from '../../../components/ConfirmAlert';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);

  const [activeFlag, setActiveFlag] = useState({
    titleFlag: 0,
    descriptionFlag: 0,
    recommendFlag: 0,
    noticeFlag: 0,
  });
  const [isActive, setIsActive] = useState(false);

  const [listCountDetail, setListCountDetail] = useState({
    userCount: 0,
    commentCount: 0,
  });

  const [listDetail, setListDetail] = useState({
    id: 0,
    title: '',
    Place: '',
    price: '',
    limitDate: '',
    description: '',
    recommend: '',
    notice: '',
    address: '',
    thumbnail: '',
    commentNickName: null,
    commentImage: null,
    commentDescription: null,
  });

  const getListDetail = async () => {
    const id = route.params?.id;
    const {
      data: {together, userCount, commentCount},
      statusCode,
      message,
    } = await togetherApi.userOpenDetail(id);
    if (statusCode !== 200) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '데이터 조회에 실패했습니다.',
            description: message,
          }}
          checked={() => {}}
        />,
      );
    }
    setListDetail(together);
    setListCountDetail({
      userCount,
      commentCount,
    });
  };

  const onChangeTogether = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setListDetail({
      ...listDetail,
      [name]: value,
    });
  };

  const onChangeTitle = (e: string) => {
    setListDetail({...listDetail, title: e});
  };

  const onChangeDescription = (e: string) => {
    setListDetail({...listDetail, description: e});
  };

  const onChangeRecommend = (e: string) => {
    setListDetail({...listDetail, recommend: e});
  };

  const onChangeNotice = (e: string) => {
    setListDetail({...listDetail, notice: e});
  };

  const modifyTogetherData = async () => {
    const modifyData = {
      title: listDetail.title,
      description: listDetail.description,
      recommend: listDetail.recommend,
      notice: listDetail.notice,
    };
    const {statusCode, message} = await togetherApi.putTogetherDetail(listDetail.id, modifyData);
    if (statusCode !== 201) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '수정이 실패되었습니다.',
            description: '다시 입력해주세요.',
          }}
          checked={() => {}}
        />,
      );
    } else {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'check',
            title: message,
            description: '',
          }}
          checked={() => {
            navigation.navigate('togetherDetail', {refresh: true});
          }}
        />,
      );
    }
  };

  const deleteOkAlert = async () => {
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'check',
          title: '모임 삭제가 완료되었습니다.',
          description: '',
        }}
        checked={() => {
          navigation.navigate('togetherMain', {refresh: true});
        }}
      />,
    );
  };

  const deleteFailAlert = async () => {
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'warning',
          title: '모임 삭제가 실패되었습니다.',
          description: '다시 시도해주세요.',
        }}
        checked={() => {}}
      />,
    );
  };

  const deleteTogetherData = async () => {
    setAlertVisible(
      <ConfirmAlert
        confirm={{
          type: 'delete',
          title: '모임을 삭제하시겠습니까?',
          description: '삭제된 데이터는 되돌릴 수 없습니다.',
          confirmedText: '삭제',
          canceledText: '취소',
        }}
        canceled={() => {}}
        confirmed={async () => {
          const {statusCode} = await togetherApi.deleteTogetherDetail(listDetail.id);
          if (statusCode !== 201) {
            deleteFailAlert();
          } else {
            deleteOkAlert();
          }
        }}
      />,
    );
  };

  const blankValidation = () => {
    if (listDetail.title.trim().length <= 0) {
      setActiveFlag({...activeFlag, titleFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '제목은 빈칸으로 시작할 수 없습니다.',
            description: '',
          }}
          checked={() => {}}
        />,
      );
      return false;
    } else if (listDetail.description.trim().length <= 0) {
      setActiveFlag({...activeFlag, descriptionFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '소개는 빈칸으로 시작할 수 없습니다.',
            description: '',
          }}
          checked={() => {}}
        />,
      );
      return false;
    } else if (listDetail.recommend.trim().length <= 0) {
      setActiveFlag({...activeFlag, recommendFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '추천은 빈칸으로 시작할 수 없습니다.',
            description: '',
          }}
          checked={() => {}}
        />,
      );
      return false;
    } else if (listDetail.notice.trim().length <= 0) {
      setActiveFlag({...activeFlag, noticeFlag: -1});
      setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '공지사항은',
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
    getListDetail();
  }, []);

  useEffect(() => {
    setActiveFlag({
      ...activeFlag,
      titleFlag: listDetail.title.length,
      descriptionFlag: listDetail.description.length,
      recommendFlag: listDetail.recommend.length,
      noticeFlag: listDetail.notice.length,
    });
  }, [listDetail]);

  useEffect(() => {
    setIsActive(
      listDetail.title.length > 0 &&
        listDetail.description.length > 0 &&
        listDetail.recommend.length > 0 &&
        listDetail.notice.length > 0,
    );
  }, [listDetail]);

  return (
    <TogetherModifyPresenter
      navigation={navigation}
      listDetail={listDetail}
      listCountDetail={listCountDetail}
      onChangeTogether={onChangeTogether}
      modifyTogetherData={modifyTogetherData}
      deleteTogetherData={deleteTogetherData}
      activeFlag={activeFlag}
      isActive={isActive}
      blankValidation={blankValidation}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
      onChangeRecommend={onChangeRecommend}
      onChangeNotice={onChangeNotice}
    />
  );
};
