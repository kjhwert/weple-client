import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import CheckBox from '@react-native-community/checkbox';
import {IMusicGroup, IMusics} from '../../../module/type/music';
import {BASE_URL} from '../../../module/common';
import RecordContext2, {IRecordContext2} from '../../../module/context/RecordContext2';

interface IProps {
  musicGroup: Array<IMusicGroup>;
  musicPlay: (track: IMusics) => void;
  musicPause: () => void;
  playedMusic: number;
}
export default ({musicGroup, musicPlay, musicPause, playedMusic}: IProps) => {
  const {
    onChangeRecordsMusic,
    records: {music: recordMusic},
  } = useContext(RecordContext2) as IRecordContext2;
  useEffect(() => {
    return () => {
      musicPause();
    };
  }, []);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            {musicGroup.map(({id, name, musics}) => (
              <MusicGroupContainer key={id}>
                <MusicGroupName>{name}</MusicGroupName>
                <MusicContainer>
                  {/*{musics.length > 0 ? (*/}
                  {musics.map((music) => (
                    <MusicWrapper key={music.id}>
                      <CheckBox
                        disabled={false}
                        value={recordMusic.id === music.id}
                        onValueChange={() => {
                          onChangeRecordsMusic(music);
                        }}
                      />
                      <MusicContentWrapper>
                        <MusicArtWorkImage
                          source={{
                            uri: `${BASE_URL}/${music.artwork}`,
                          }}
                          resizeMode="cover"
                        />
                        <MusicTiTleArtistWrapper>
                          <MusicTitleText>{music.title}</MusicTitleText>
                          <MusicArtistText>{music.artist}</MusicArtistText>
                        </MusicTiTleArtistWrapper>
                        {playedMusic !== music.id ? (
                          <PlayBtn onPress={() => musicPlay(music)}>
                            <PlayImage source={require('../../../assets/play_icon.png')} />
                          </PlayBtn>
                        ) : (
                          <PauseBtn onPress={musicPause}>
                            <PauseImage source={require('../../../assets/icon_pause.png')} />
                          </PauseBtn>
                        )}
                      </MusicContentWrapper>
                    </MusicWrapper>
                  ))}

                  {/*) : (*/}
                  {/*  <MusicWrapper>*/}
                  {/*    <CheckBox value={recordMusic === null} onValueChange={() => onChangeRecordsMusic(null)} />*/}
                  {/*    <MusicContentWrapper>*/}
                  {/*      <MusicEmptyImage />*/}
                  {/*      <MusicTiTleArtistWrapper>*/}
                  {/*        <MusicTitleText>재생 가능한 음악이 없습니다.</MusicTitleText>*/}
                  {/*      </MusicTiTleArtistWrapper>*/}
                  {/*    </MusicContentWrapper>*/}
                  {/*  </MusicWrapper>*/}
                  {/*)}*/}
                </MusicContainer>
              </MusicGroupContainer>
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

const MusicGroupContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MusicGroupName = styled.Text`
  padding: 10px 0;
  font-size: 15px;
  color: #181818;
  font-weight: bold;
`;

const MusicContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MusicWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0 10px 0;
`;

const MusicContentWrapper = styled.View`
  width: 88%;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  justify-content: space-around;
`;

const MusicArtWorkImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const MusicTiTleArtistWrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 65%;
  align-self: center;
`;

const MusicTitleText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #333;
  padding-bottom: 5px;
`;

const MusicArtistText = styled.Text`
  font-size: 10px;
  color: #b5b5b5;
`;

const MusicEmptyImage = styled.View`
  border-width: 1px;
  border-color: #d4d4d4;
  padding: 25px;
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

const PauseBtn = styled.TouchableOpacity`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: center;
`;

const PauseImage = styled.Image`
  width: 30px;
  height: 30px;
`;
