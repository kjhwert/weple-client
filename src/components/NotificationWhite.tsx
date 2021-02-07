import React from 'react';
import styled from 'styled-components/native';
import FeedPopularityContainer from '../screens/Feed/FeedPopularityContainer';
import FeedRecommendContainer from '../screens/Feed/FeedRecommendContainer';

const feedScreens = [
  'feedMain',
  'activeDetail',
  'feedSearch',
  'feedAlarmInfo',
  'feedEventDetail',
  'friendActive',
  'friendActiveJoin',
  'friendComment',
  'friendFollower',
  'friendLike',
  'friendShare',
  'feedPopularity',
  'feedRecommend',
];

export default ({navigation, route}) => {
  return (
    <Container
      onPress={() => {
        const {name} = route;
        const isFeedScreen = feedScreens.find((feed) => feed === name);
        if (isFeedScreen) {
          return navigation.navigate('feedAlarmInfo');
        }

        return navigation.navigate('togetherAlarmInfo');
      }}>
      <AlarmImage source={require('../assets/alarm_white_icon.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  padding: 5px;
`;

const AlarmImage = styled.Image`
  width: 23px;
  height: 23px;
`;
