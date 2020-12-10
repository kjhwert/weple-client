import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {SnsBtn, StartNextBtn} from '../../../components/SnsAccountBtn';

interface IProps {
  navigation: any;
}

export default ({navigation, snsType, snsTypeClick, isActive}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <CreateAccountWrapper>
          <CreateAccountTitle>계정 만들기</CreateAccountTitle>
          <CreateAccountContent>
            {
              '전력달리기, 미친 것같은 자전거타기, 햇빛 좋은날\n하이킹하고 싶은 것은 무엇이든 당신의 모든 활동을\n쉽고 아름다운 방법으로 공유하세요.'
            }
          </CreateAccountContent>
        </CreateAccountWrapper>

        <SocialLoginWrapper>
          <SnsBtn
            text={'이메일로 가입하기'}
            onPress={() => snsTypeClick('emailAccount')}
            isSelect={snsType === 'emailAccount'}
            imgPath={''}
          />
          <SnsBtn
            text={'카카오톡으로 가입하기'}
            onPress={() => snsTypeClick('kakaoAccount')}
            isSelect={snsType === 'kakaoAccount'}
            imgPath={require('../../../assets/kakaoLogo.jpg')}
          />
          <SnsBtn
            text={'FaceBook으로 가입하기'}
            onPress={() => snsTypeClick('facebookAccount')}
            isSelect={snsType === 'facebookAccount'}
            imgPath={require('../../../assets/facebookLogo.png')}
          />
          <SnsBtn
            text={'Apple로 가입하기'}
            onPress={() => snsTypeClick('appleAccount')}
            isSelect={snsType === 'appleAccount'}
            imgPath={require('../../../assets/appleLogo.png')}
          />
          <SnsBtn
            text={'Google로 가입하기'}
            onPress={() => snsTypeClick('googleAccount')}
            isSelect={snsType === 'googleAccount'}
            imgPath={require('../../../assets/googleLogo.png')}
          />
        </SocialLoginWrapper>
      </ContainerCard>

      {snsType === 'emailAccount' ? (
        <StartNextBtn
          StartNextPage={'signUpEmail'}
          text={'다음'}
          navigation={navigation}
          isActive={isActive}
        />
      ) : (
        <StartNextBtn
          StartNextPage={'signUpNickname'}
          text={'다음'}
          navigation={navigation}
          isActive={isActive}
        />
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const CreateAccountWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const CreateAccountTitle = styled.Text`
  font-size: 19px;
  font-weight: bold;
  text-align: left;
`;

const CreateAccountContent = styled.Text`
  font-size: 12px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 30px 0px;
`;

const SocialLoginWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
