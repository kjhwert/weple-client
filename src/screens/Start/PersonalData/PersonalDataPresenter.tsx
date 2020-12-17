import React, { useRef } from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

interface IProps {
  navigation: any;
  slideData: any;
}
interface IColorChangeProps {
  process: string;
}

export default ({ navigation, slideData }: IProps) => {
  const swiperRef = useRef(null);
  const nextSlider = () => {
    if (!!swiperRef) {
      swiperRef.current.scrollBy(1);
      const indexNumber = swiperRef.current.state.index + 1;
      const totalNumber = swiperRef.current.state.total;
      if (indexNumber === totalNumber) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <Container>
      <Card>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}
          loop={false}
          ref={swiperRef}>
          {slideData.map((item, idx) => (
            <Wrapper key={idx}>
              <PersonalWrapper>
                <PersonalTitle>{item.title}</PersonalTitle>
                <PersonalContent>{item.text}</PersonalContent>
                <OrderWrapper>
                  <PersonalOrder>{item.number}</PersonalOrder>
                  <PersonalImageWrapper>
                    <PersonalImage source={item.image} />
                  </PersonalImageWrapper>
                </OrderWrapper>
              </PersonalWrapper>
              <LineWrapper>
                <NowLine process={item.nowProcess}></NowLine>
                <NextLine process={item.nextProcess}></NextLine>
              </LineWrapper>
            </Wrapper>
          ))}
        </Swiper>
      </Card>

      <NextBtn
        onPress={() => {
          nextSlider() && navigation.navigate('startAlarmSet');
        }}>
        <NextText>동의함</NextText>
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

const Wrapper = styled.View`
  flex: 1;
`;

const Card = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f9f9f9;
`;

const PersonalWrapper = styled.View`
  flex: 7;
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
  flex: 6;
  font-size: 13px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 20px 5px;
`;

const OrderWrapper = styled.View`
  display: flex;
  flex: 4;
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
  flex: 3;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 30px;
`;

const NowLine = styled.View`
  display: flex;
  width: ${(props: IProps) => props.process};
  border-width: 3px;
  border-color: #007bf1;
`;

const NextLine = styled.View`
  display: flex;
  width: ${(props: IProps) => props.process};
  border-width: 3px;
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
