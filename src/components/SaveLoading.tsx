import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import BouncingPreloader from 'react-native-bouncing-preloader';
import LinearGradient from 'react-native-linear-gradient';
import {LogBox} from 'react-native';

export default () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <Container>
      <LinearGradient
        colors={['#79a6fa', '#3065f4', '#4e3adf']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}>
        <ContainerCard>
          <LoadingInfoWrapper>
            <LoadingTitleText>앱을 계속 열어 두세요.</LoadingTitleText>
            <LoadingInfoText>데이터를 저장하는 중입니다.</LoadingInfoText>
          </LoadingInfoWrapper>

          <BouncingPreloader
            icons={[
              require('../assets/Loading_ttam.png'),
              require('../assets/Loading_na.png'),
            ]}
            leftDistance={-150}
            rightDistance={-200}
            speed={500}
            size={100}
          />

          <BouncingPreloader
            icons={[
              require('../assets/Loading_sweat.png'),
              require('../assets/Loading_sweat.png'),
            ]}
            leftDistance={-200}
            rightDistance={-150}
            speed={500}
            size={30}
          />
        </ContainerCard>
      </LinearGradient>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContainerCard = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const LoadingInfoWrapper = styled.View`
  flex: 0.7;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const LoadingTitleText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  width: 70%;
  text-align: center;
  margin-bottom: 10px;
`;

const LoadingInfoText = styled.Text`
  color: #e7e7e7;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;
