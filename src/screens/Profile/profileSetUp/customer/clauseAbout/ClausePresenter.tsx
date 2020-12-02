import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <SetUpWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('serviceDetaile');
                  }}>
                  <SetUpListText>서비스 약관</SetUpListText>
                  <MoreImage
                    source={require('../../../../../assets/set_more.png')}
                  />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('agreementDetaile');
                  }}>
                  <SetUpListText>이용약관</SetUpListText>
                  <MoreImage
                    source={require('../../../../../assets/set_more.png')}
                  />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('subscriptionDetaile');
                  }}>
                  <SetUpListText>구독약관</SetUpListText>
                  <MoreImage
                    source={require('../../../../../assets/set_more.png')}
                  />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('privacyDetaile');
                  }}>
                  <SetUpListText>개인정보 보호정책</SetUpListText>
                  <MoreImage
                    source={require('../../../../../assets/set_more.png')}
                  />
                </SetBtn>
              </SetBtnWrapper>
            </SetUpWrapper>
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
  background-color: #fff;
`;

const ScrollWrapper = styled.ScrollView``;

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SetUpWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 100%;
`;

const SetBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px;
  border-bottom-width: 1px;
  border-color: #eeeeee;
`;

const SetBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const SetUpListText = styled.Text`
  font-size: 13px;
  text-align: left;
  color: #7f7f7f;
  width: 85%;
`;

const MoreImage = styled.Image`
  width: 15px;
  height: 15px;
`;
