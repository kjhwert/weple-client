import React, {useRef} from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

interface IProps {
  navigation: any;
  slideData: any;
  confirmUserLocation: () => void;
  confirmCameraAccess: () => void;
}
interface IColorChangeProps {
  process: number;
}

const renderPagination = (index: number, total: number) => {
  const now = (100 / total) * (index + 1);
  const next = 100 - now;
  return (
    <LineWrapper>
      <NowLine process={now}></NowLine>
      <NextLine process={next}></NextLine>
    </LineWrapper>
  );
};

export default ({navigation, slideData, confirmCameraAccess, confirmUserLocation}: IProps) => {
  const swiperRef = useRef(null);
  const nextSlider = async () => {
    if (swiperRef) {
      const indexNumber = swiperRef.current.state.index + 1;
      const totalNumber = swiperRef.current.state.total;
      if (indexNumber === 2) {
        console.log('ask camera access permission');
        await confirmCameraAccess();
        swiperRef.current.scrollBy(1);
        return;
      }
      if (indexNumber === 3) {
        console.log('ask user location permission');
        await confirmUserLocation();
        swiperRef.current.scrollBy(1);
        return;
      }

      if (indexNumber === totalNumber) {
        return navigation.navigate('startAlarmSet');
      }

      swiperRef.current.scrollBy(1);
      return;
    }
  };

  return (
    <Container>
      <Card>
        <SwiperWrapper>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            showsPagination={true}
            loop={false}
            ref={swiperRef}
            renderPagination={renderPagination}>
            {slideData.map((item, idx) => (
              <PersonalWrapper key={idx}>
                <PersonalTitle>{item.title}</PersonalTitle>
                <PersonalContent>{item.text}</PersonalContent>
                <OrderWrapper>
                  <PersonalOrder>{item.number}</PersonalOrder>
                  <PersonalImageWrapper>
                    <PersonalImage source={item.image} />
                  </PersonalImageWrapper>
                </OrderWrapper>
              </PersonalWrapper>
            ))}
          </Swiper>
        </SwiperWrapper>
      </Card>

      <NextBtn
        onPress={() => {
          nextSlider();
        }}>
        <NextText>?????????</NextText>
      </NextBtn>
    </Container>
  );
};

var styles = {
  wrapper: {},
};

const Container = styled.View`
  flex: 1;
`;

const Card = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f9f9f9;
`;

const SwiperWrapper = styled.View`
  flex: 0.7;
  display: flex;
  width: 100%;
`;

const PersonalWrapper = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
  border-width: 1px;
  border-color: #eee;
  background-color: #fff;
  padding: 20px 10px;
`;

const PersonalTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  max-width: 60%;
  background-color: #007bf1;
  padding: 5px;
`;

const PersonalContent = styled.Text`
  flex: 0.6;
  font-size: 13px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 20px 5px;
`;

const OrderWrapper = styled.View`
  display: flex;
  flex: 0.3;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px 5px;
`;

const PersonalOrder = styled.Text`
  font-size: 19px;
  font-weight: bold;
  text-align: left;
  color: #c0c0c0;
  padding: 5px;
`;

const PersonalImageWrapper = styled.View`
  display: flex;
  justify-content: flex-end;
`;

const PersonalImage = styled.Image`
  width: 70px;
  height: 70px;
`;

const LineWrapper = styled.View`
  flex: 0.7;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 30px;
  border-top-width: 1px;
  border-color: #eee;
`;

const NowLine = styled.View`
  display: flex;
  width: ${(props: IColorChangeProps) => props.process}%;
  border-width: ${(props: IColorChangeProps) => (props.process === 0 ? 0 : 3)}px;
  border-color: #007bf1;
`;

const NextLine = styled.View`
  display: flex;
  width: ${(props: IColorChangeProps) => props.process}%;
  border-width: ${(props: IColorChangeProps) => (props.process === 0 ? 0 : 3)}px;
  border-color: #b2b2b2;
`;

const NextBtn = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
