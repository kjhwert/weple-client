import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import ProfileContext from '../module/context/ProfileContext';
import {IUserStatistics} from '../module/type/feed';
import {Text} from 'react-native';

export default () => {
  const {userStatistics, getUserStatistics}: any = useContext(ProfileContext);

  useEffect(() => {
    getUserStatistics();
  }, []);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {userStatistics.length !== 0 ? (
              userStatistics.map(({activityName, calorie, distance, duration}: IUserStatistics) => (
                <StatisticWrapper key={activityName}>
                  <StatisticTitle>{activityName}</StatisticTitle>
                  <ActiveWrapper>
                    <KmTotalStatistic>{distance} km</KmTotalStatistic>
                    <MinTotalStatistic>{Math.floor(Number(duration) / 60)} 분</MinTotalStatistic>
                    <CalTotalStatistic>{calorie} cal</CalTotalStatistic>
                  </ActiveWrapper>
                </StatisticWrapper>
              ))
            ) : (
              <Text>데이터가 없습니다.</Text>
            )}
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.View`
  height: 100%;
`;

const ScrollWrapper = styled.ScrollView``;

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const StatisticWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StatisticTitle = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #000000;
  text-align: left;
  margin: 10px 0;
`;

const ActiveWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const KmTotalStatistic = styled.Text`
  font-size: 14px;
  color: #6d6d6d;
  text-align: center;
  width: 33%;
  padding: 15px 0;
  background-color: #fff;
`;

const MinTotalStatistic = styled.Text`
  font-size: 14px;
  color: #6d6d6d;
  text-align: center;
  width: 33%;
  padding: 15px 0;
  background-color: #fff;
`;

const CalTotalStatistic = styled.Text`
  font-size: 14px;
  color: #6d6d6d;
  text-align: center;
  width: 33%;
  padding: 15px 0;
  background-color: #fff;
`;
