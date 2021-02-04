import React, {useContext} from 'react';
import styled from 'styled-components/native';
import FeedContext from '../module/context/FeedContext';
import TogetherContext from '../module/context/TogetherContext';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {changeSearchVisible: feedSearchVisible}: any = useContext(FeedContext);
  const {changeSearchVisible: togetherSearchVisible}: any = useContext(TogetherContext);
  const navigate = () => {
    const {name} = route;
    if (name === 'feedMain') {
      return feedSearchVisible();
    }

    if (name === 'togetherMain') {
      return togetherSearchVisible();
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
