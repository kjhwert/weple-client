import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <AlarmWrapper>
          <AlarmTitle>{'환영합니다!\n땀나 Member의 특별한 혜택'}</AlarmTitle>
          <AlarmContent>
            {
              '더욱 멋진 당신의 어드벤처 영상을 만들어보세요.\n- 다양한 맵 선택기능\n- 음악 추가 기능'
            }
          </AlarmContent>
        </AlarmWrapper>
        <MemberBtnWrapper>
          <MemberBtn onPress={() => {}}>
            <MemberBtnText>멤버십 가입하기</MemberBtnText>
          </MemberBtn>
        </MemberBtnWrapper>
      </ContainerCard>
      <NextBtn nextPage={'login'} navigation={navigation}>
        {`다음`}
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const AlarmWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const AlarmTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const AlarmContent = styled.Text`
  font-size: 13px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 30px 0px 60px 0px;
`;

const MemberBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MemberBtn = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const MemberBtnText = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;
