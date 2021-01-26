import React, {useContext} from 'react';
import styled from 'styled-components/native';
import FeedContext from '../module/context/FeedContext';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {changeSearchVisible}: any = useContext(FeedContext);

  const navigate = () => {
    const {name} = route;
    if (name === 'feedMain') {
      return changeSearchVisible();
    }

    if (name === 'togetherMain') {
      return navigation.navigate('togetherSearch');
    }
  };

  return (
    <Container
      onPress={() => {
        navigate();
      }}>
      <SearchImage source={require('../assets/header_search.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  padding: 5px;
`;

const SearchImage = styled.Image`
  width: 21px;
  height: 21px;
`;
