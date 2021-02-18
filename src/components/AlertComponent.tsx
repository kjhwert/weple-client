import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {userApi} from '../module/api';
import AlertContext from '../module/context/AlertContext';
import {INotification} from '../module/type/notification';
import {timeForToday} from '../module/common';
import Loading from './Loading';

export default () => {
  const [notification, setNotification] = useState<Array<INotification>>([]);
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const [loading, setLoading] = useState(false);

  const getNotification = async () => {
    setLoading(true);
    const {statusCode, data, message} = await userApi.getNotification();
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setNotification(data);
    setLoading(false);
  };

  const setNotificationRead = async () => {
    await userApi.updateNotification();
  };

  useEffect(() => {
    getNotification();

    return () => {
      setNotificationRead();
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {notification.length > 0 ? (
              notification.map(({id, isRead, description, createdAt}) => (
                <AlarmWrapper key={id}>
                  <AlarmMarkWrapper>
                    <AlarmMark isNew={isRead}></AlarmMark>
                  </AlarmMarkWrapper>
                  <AlarmBtnWrapper>
                    <AlarmBtn>
                      <AlarmTitleText>{description}</AlarmTitleText>
                    </AlarmBtn>
                    <AlarmDateText>{timeForToday(createdAt)}</AlarmDateText>
                  </AlarmBtnWrapper>
                </AlarmWrapper>
              ))
            ) : (
              <NoAlertText>알림이 없습니다.</NoAlertText>
            )}
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const NoAlertText = styled.Text`
  margin-top: 10px;
`;

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.View`
  height: 100%;
  background-color: #fff;
`;

const ScrollWrapper = styled.ScrollView``;

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const AlarmWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  border-bottom-width: 2px;
  border-color: #f3f3f3;
`;

const AlarmMarkWrapper = styled.View`
  width: 10%;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AlarmMark = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${({isNew}: {isNew: boolean}) => (!isNew ? '#ff0d0d' : '#b5b5b5')};
`;

const AlarmBtnWrapper = styled.View`
  display: flex;
  flex-flow: column;
  width: 80%;
`;

const AlarmBtn = styled.View`
  width: 100%;
  padding: 5px 0;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AlarmTitleText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const AlarmDateText = styled.Text`
  font-size: 11px;
  color: #7f7f7f;
  padding-bottom: 5px;
`;
