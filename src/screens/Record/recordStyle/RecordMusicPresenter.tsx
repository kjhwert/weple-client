import React, {useState} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import CheckBox from '@react-native-community/checkbox';

interface IProps {
  navigation: any;
  isNew: boolean;
}

export default ({navigation, FreeMusic, MumbershipMusic}: IProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <MusicStyleTitle>무료</MusicStyleTitle>
            {FreeMusic.map((item, idx) => (
              <MusicStyleWrapper key={idx}>
                <CheckBox
                  style={{
                    position: 'absolute',
                    right: 6,
                    bottom: 1,
                  }}
                  boxType={'circle'}
                  disabled={false}
                  value={false}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <AlbumImageWrapper onPress={() => {}}>
                  <FreeAlbumImage />
                </AlbumImageWrapper>
                <MusicTextWrapper>
                  <MusicTitleText>{item.title}</MusicTitleText>
                  <MusicText></MusicText>
                </MusicTextWrapper>
                <PlayBtn>
                  <PlayImage />
                </PlayBtn>
              </MusicStyleWrapper>
            ))}

            <MusicStyleTitle>멤버 전용</MusicStyleTitle>
            {MumbershipMusic.map((item, idx) => (
              <MusicStyleWrapper key={idx}>
                <CheckBox
                  style={{
                    position: 'absolute',
                    right: 6,
                    bottom: 1,
                  }}
                  boxType={'circle'}
                  disabled={false}
                  value={false}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <AlbumImageWrapper onPress={() => {}}>
                  <AlbumImage source={item.image} />
                </AlbumImageWrapper>
                <MusicTextWrapper>
                  <MusicTitleText>{item.title}</MusicTitleText>
                  <MusicText>{item.name}</MusicText>
                </MusicTextWrapper>
                <PlayBtn>
                  <PlayImage
                    source={require('../../../assets/play_icon.png')}
                  />
                </PlayBtn>
              </MusicStyleWrapper>
            ))}
          </ContainerCard>
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

const MusicStyleTitle = styled.Text`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 10px 0;
  font-size: 15px;
  color: #181818;
  font-weight: bold;
  text-align: left;
`;

const MusicStyleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: #eee;
  border-width: 1px;
`;

const AlbumImageWrapper = styled.TouchableOpacity`
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 10px;
`;

const FreeAlbumImage = styled.Image`
  width: 50px;
  height: 50px;
  background-color: #f8f8f8;
  border-width: 1px;
  border-color: #d4d4d4;
`;

const AlbumImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const MusicTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 62%;
  margin-right: 5px;
`;

const MusicTitleText = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  padding-bottom: 5px;
`;

const MusicText = styled.TextInput`
  width: 100%;
  font-size: 10px;
  color: #b5b5b5;
`;

const PlayBtn = styled.TouchableOpacity`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: center;
`;

const PlayImage = styled.Image`
  width: 30px;
  height: 30px;
`;
