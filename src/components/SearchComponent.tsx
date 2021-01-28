import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import FeedContext from '../module/context/FeedContext';
import AlertContext from '../module/context/AlertContext';
import CheckAlert from './CheckAlert';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {changeSearchVisible}: any = useContext(FeedContext);
  const {setAlertVisible}: any = useContext(AlertContext);
  const [searchText, setSearchText] = useState('');

  const onSubmit = () => {
    if (searchText.length === 0) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '검색어를 입력해주세요.',
            description: '',
          }}
        />,
      );
    }
    navigation.navigate('feedSearch', {searchText});
  };

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <Container onPress={changeSearchVisible}>
      <Wrapper>
        <SearchInput
          placeholder="검색어 입력"
          onSubmitEditing={onSubmit}
          value={searchText}
          onChangeText={onChangeSearchText}
        />
        <SearchBtn onPress={changeSearchVisible}>
          <SearchImage source={require('../assets/icon_close.png')} />
        </SearchBtn>
      </Wrapper>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 20;
  display: flex;
`;

const Wrapper = styled.View`
  z-index: 30;
  width: 100%;
  background-color: #fff;
  border-color: rgba(0, 0, 0, 0.2);
  border-top-width: 0.5px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SearchInput = styled.TextInput`
  width: 80%;
  padding: 5px 10px;
`;

const SearchBtn = styled.TouchableOpacity``;

const SearchImage = styled.Image`
  width: 15px;
  height: 15px;
`;
