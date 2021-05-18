import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import FeedContext from '../module/context/FeedContext';
import AlertContext from '../module/context/AlertContext';
import CheckAlert from './CheckAlert';
import TogetherContext from '../module/context/TogetherContext';

interface IProps {
  navigation: any;
  stack: string;
}

export default ({navigation, stack}: IProps) => {
  const {changeSearchVisible: feedChangeStatus}: any = useContext(FeedContext);
  const {changeSearchVisible: togetherChangeStatus, changeSearchTitle}: any = useContext(TogetherContext);
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const [searchText, setSearchText] = useState('');

  const onSubmit = () => {
    if (searchText.length === 0) {
      return setWarningAlertVisible('검색어를 입력해주세요.', '');
    }

    switch (stack) {
      case 'feed':
        return navigation.navigate('feedSearch', {searchText});
      case 'together':
        changeSearchTitle(searchText);
        return navigation.navigate('togetherSearch');
    }
  };

  const changeSearchStatus = () => {
    switch (stack) {
      case 'feed':
        return feedChangeStatus();
      case 'together':
        return togetherChangeStatus();
    }
  };

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <Container onPress={changeSearchStatus}>
      <Wrapper>
        <SearchInput
          placeholder="검색어 입력"
          onSubmitEditing={onSubmit}
          value={searchText}
          onChangeText={onChangeSearchText}
        />
        <SearchBtn onPress={changeSearchStatus}>
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
