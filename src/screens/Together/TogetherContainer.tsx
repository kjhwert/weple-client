import React, {useState, useEffect, useContext} from 'react';
import TogetherPresenter from './TogetherPresenter';
import {togetherApi} from '../../module/api';
import UserContext from '../../module/context/UserContext';
import {getLatestLocation} from 'react-native-location';
import AlertContext from '../../module/context/AlertContext';
import {ITogethers, IUserTogethers} from '../../module/type/together';
import TogetherContext from '../../module/context/TogetherContext';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {getUserTogethers}: any = useContext(TogetherContext);
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const [togetherPaging, setTogetherPaging] = useState({
    id: 0,
    hasNextPage: false,
    page: 1,
    lat: 0,
    lon: 0,
  });

  const [togethers, setTogethers] = useState<Array<ITogethers>>([]);
  const [isMapView, setIsMapView] = useState(false);

  const turnMapView = () => {
    setIsMapView(!isMapView);
  };

  const getLocation = async () => {
    const coordinates = await getLatestLocation();
    if (!coordinates) {
      return setWarningAlertVisible('내 위치를 가져오는데 실패했습니다.', '잠시 후에 다시 시도해주세요.');
    }
    const {latitude: lat, longitude: lon} = coordinates;
    // const lat = 37.546474;
    // const lon = 126.949941;
    const {statusCode, message, data, paging} = await togetherApi.locationList(lat, lon, 1);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패헀습니다.', message);
    }
    setTogethers(data);
    setTogetherPaging({...togetherPaging, id: 0, page: 1, lat, lon, hasNextPage: paging.hasNextPage});
  };

  const getMoreLocation = async () => {
    const {lat, lon, page: nextPage} = togetherPaging;
    const page = nextPage + 1;
    const {statusCode, message, data, paging} = await togetherApi.locationList(lat, lon, page);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패헀습니다.', message);
    }

    const newTogethers = togethers.concat(data);
    setTogethers(newTogethers);
    setTogetherPaging({...togetherPaging, page, hasNextPage: paging.hasNextPage});
  };

  const getFollower = async () => {
    const {statusCode, message, data, paging} = await togetherApi.followerList(1);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패헀습니다.', message);
    }
    setTogethers(data);
    setTogetherPaging({...togetherPaging, id: 1, page: 1, hasNextPage: paging.hasNextPage});
  };

  const getMoreFollower = async () => {
    const {page: nextPage} = togetherPaging;
    const page = nextPage + 1;

    const {statusCode, message, data, paging} = await togetherApi.followerList(page);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패헀습니다.', message);
    }
    const newTogethers = togethers.concat(data);
    setTogethers(newTogethers);
    setTogetherPaging({...togetherPaging, page, hasNextPage: paging.hasNextPage});
  };

  const getEndSoon = async () => {
    const {statusCode, message, data, paging} = await togetherApi.endSoonList(1);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패헀습니다.', message);
    }
    setTogethers(data);
    setTogetherPaging({...togetherPaging, id: 2, page: 1, hasNextPage: paging.hasNextPage});
  };

  const getMoreEndSoon = async () => {
    const {page: nextPage} = togetherPaging;
    const page = nextPage + 1;

    const {statusCode, message, data, paging} = await togetherApi.endSoonList(page);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패헀습니다.', message);
    }
    const newTogethers = togethers.concat(data);
    setTogethers(newTogethers);
    setTogetherPaging({...togetherPaging, page, hasNextPage: paging.hasNextPage});
  };

  const getMoreTogethers = () => {
    const {id, hasNextPage} = togetherPaging;
    if (!hasNextPage) {
      return;
    }

    switch (id) {
      case 0:
        return getMoreLocation();
      case 1:
        return getMoreFollower();
      case 2:
        return getMoreEndSoon();
    }
  };

  useEffect(() => {
    getUserTogethers();
    getLocation();
  }, [route]);

  return (
    <TogetherPresenter
      navigation={navigation}
      togetherPaging={togetherPaging}
      togethers={togethers}
      isMapView={isMapView}
      getLocation={getLocation}
      getFollower={getFollower}
      getEndSoon={getEndSoon}
      turnMapView={turnMapView}
      getMoreTogethers={getMoreTogethers}
    />
  );
};
