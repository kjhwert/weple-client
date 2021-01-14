import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputBox, TextBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createRoom, onChangeRoom}: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <IntroduceWrapper>
              <InputBox
                title={'제목'}
                placeholder="제목을 10자 이상 입력해주세요."
                name="title"
                value={createRoom.title}
                onChange={onChangeRoom}
              />
              <TextBox
                title={'소개'}
                placeholder="모임을 소개해주세요."
                name="description"
                value={createRoom.description}
                onChange={onChangeRoom}
              />
              <TextBox
                title={'이런분들께 추천해요'}
                placeholder="추천 대상을 입력해주세요."
                name="recommend"
                value={createRoom.recommend}
                onChange={onChangeRoom}
              />
              <TextBox
                title={'공지사항'}
                placeholder="공지사항을 입력해주세요."
                name="notice"
                value={createRoom.notice}
                onChange={onChangeRoom}
              />
            </IntroduceWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn text={'다음'} StartNextPage={'togetherPostPlace'} navigation={navigation} isActive={true} />
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

const IntroduceWrapper = styled.View`
  display: flex;
  width: 100%;
  margin-bottom: 50px;
`;
