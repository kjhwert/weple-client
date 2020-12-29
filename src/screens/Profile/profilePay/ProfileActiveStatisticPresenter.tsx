import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
  activeStatistic: Array<IActivity>;
}

export default ({navigation, activeStatistic}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {activeStatistic.map((item, idx) => (
              <StatisticWrapper key={idx}>
                <StatisticTitle>{item.name}</StatisticTitle>
                <ActiveWrapper>
                  <KmTotalStatistic>{item.km} km</KmTotalStatistic>
                  <MinTotalStatistic>{item.min} 분</MinTotalStatistic>
                  <CalTotalStatistic>{item.cal} cal</CalTotalStatistic>
                </ActiveWrapper>
              </StatisticWrapper>
            ))}
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
