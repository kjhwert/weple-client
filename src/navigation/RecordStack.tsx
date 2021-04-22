import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BackBtn from '../components/BackBtn';
import RecordContainer from '../screens/Record/RecordContainer';
import RecordFinishContainer from '../screens/Record/RecordFinishContainer';
import RecordSetContainer from '../screens/Record/recordSetUp/RecordSetContainer';
import RecordActiveTypeContainer from '../screens/Record/recordSetUp/RecordActiveTypeContainer';
import RecordMapStyleContainer from '../screens/Record/recordStyle/RecordMapStyleContainer';
import RecordMusicContainer from '../screens/Record/recordStyle/RecordMusicContainer';
import RecordSetupBtn from '../components/RecordSetupBtn';
import {View} from 'react-native';
import styled from 'styled-components/native';
import RecordContext2, {IRecordContext2} from '../module/context/RecordContext2';

const Stack = createStackNavigator();

export default () => {
  const {settings} = useContext(RecordContext2) as IRecordContext2;
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <RecordSetupBtn navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      })}>
      <Stack.Screen
        name="recordMain"
        component={RecordContainer}
        options={({navigation}) => ({
          headerLeft: () => <View />,
          headerRight: () => (settings.isStart ? <View /> : <RecordSetupBtn navigation={navigation} />),
          headerTitle: () => (
            <HeaderTitleWrapper onPress={() => !settings.isStart && navigation.navigate('recordActiveType')}>
              <HeaderTitle>{settings.activity.name}</HeaderTitle>
              <HeaderArrowImage source={require('../assets/arrowBlack.png')} />
            </HeaderTitleWrapper>
          ),
        })}
      />
      <Stack.Screen
        options={({navigation, route}) => ({
          headerLeft: () => <BackBtn navigation={navigation} route={route} />,
          headerRight: () => <View />,
          headerTitle: '새로운 활동',
        })}
        name="recordFinish"
        component={RecordFinishContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '설정',
          headerRight: () => <View />,
        }}
        name="recordSet"
        component={RecordSetContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '활동 유형',
          headerRight: () => <View />,
        }}
        name="recordActiveType"
        component={RecordActiveTypeContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '지도 선택',
          headerRight: () => <View />,
        }}
        name="recordMapStyle"
        component={RecordMapStyleContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '음악 선택',
          headerRight: () => <View />,
        }}
        name="recordMusic"
        component={RecordMusicContainer}
      />
    </Stack.Navigator>
  );
};

const HeaderTitleWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  margin-right: 5px;
  font-size: 14px;
  font-weight: 600;
`;

const HeaderArrowImage = styled.Image`
  width: 10px;
  height: 10px;
  transform: rotate(270deg);
`;
