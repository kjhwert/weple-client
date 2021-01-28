import React, {useState, useEffect, useContext} from 'react';
import TogetherPresenter from './TogetherPresenter';
import {togetherApi} from '../../module/api';
import UserContext from '../../module/context/UserContext';
import {getLatestLocation} from 'react-native-location';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {getUserId}: any = useContext(UserContext);

  const [userList, setUserList] = useState({
    togetherCount: 0,
    togethers: [],
  });

  const [togetherPaging, setTogetherPaging] = useState({
    id: 0,
    hasNextPage: true,
    page: 1,
  });

  const [togetherMenu, setTogetherMenu] = useState([
    {
      id: 0,
      image: '',
      iconImage: '',
      distance: 0,
      title: '',
      address: '',
      pay: '',
      endTime: 0,
    },
  ]);

  const [isMapView, setIsMapView] = useState(false);

  const turnMapView = () => {
    setIsMapView(!isMapView);
  };

  const setLocationPaging = async () => {
    const locationPaging = {id: 0, page: 1};
    setTogetherPaging(locationPaging);
    await getLocation(locationPaging);
  };

  const setFollowerPaging = async () => {
    const followerPaging = {id: 1, page: 1};
    setTogetherPaging(followerPaging);
    await getFollower(followerPaging);
  };

  const setEndSoonPaging = async () => {
    const endSoonPaging = {id: 2, page: 1};
    setTogetherPaging(endSoonPaging);
    await getEndSoon(endSoonPaging);
  };

  const getTogether = async () => {
    const id = await getUserId();
    const {data, statusCode} = await togetherApi.userOpenList(id);
    if (statusCode !== 200) {
    } else {
      setUserList(data);
    }
  };

  const getLocation = async (locationPaging) => {
    const {latitude: lat, longitude: lon}: any = await getLatestLocation();
    const {data} = await togetherApi.locationList(lat, lon, locationPaging.page);
    setTogetherMenu(data);
  };

  const getFollower = async (followerPaging) => {
    const {data} = await togetherApi.followerList(followerPaging.page);
    setTogetherMenu(data);
  };

  const getEndSoon = async (endSoonPaging) => {
    const {data} = await togetherApi.endSoonList(endSoonPaging.page);
    setTogetherMenu(data);
  };

  useEffect(() => {
    getTogether();
    setLocationPaging();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) {
      getTogether();
      setLocationPaging();
    }
  }, [route.params?.refresh]);

  return (
    <TogetherPresenter
      navigation={navigation}
      userList={userList}
      togetherPaging={togetherPaging}
      togetherMenu={togetherMenu}
      setLocationPaging={setLocationPaging}
      setFollowerPaging={setFollowerPaging}
      setEndSoonPaging={setEndSoonPaging}
      isMapView={isMapView}
      turnMapView={turnMapView}
    />
  );
};
