import React, {createContext, ReactNode, useContext, useState} from 'react';
import {BASE_URL} from '../../module/common';
import {togetherApi} from '../../module/api';
import {ITogethers} from '../type/together';
import AlertContext from './AlertContext';
import {getLatestLocation} from 'react-native-location';

const TogetherContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const TogetherContextProvider = ({children}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchCategories, setSearchCategories] = useState<Array<number>>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [createRoom, setCreateRoom] = useState({
    title: '',
    description: '',
    recommend: '',
    notice: '',
    togetherDate: new Date(),
    limitDate: '',
    togetherPlace: '',
    maxMember: '',
    togetherPrice: '',
    togetherTags: [],
    isPublic: true,
    feed: 0,
    thumbnail: '',
    address: '',
    activity: 0,
  });
  const [searchIndex, setSearchIndex] = useState<Array<ITogethers>>([]);
  const [searchPagination, setSearchPagination] = useState({
    page: 1,
    hasNextPage: false,
    title: '',
    lat: 0,
    lon: 0,
  });

  const listIndex = async () => {
    setSearchLoading(true);
    const page = 1;
    const {statusCode, message, data, paging} = await togetherApi.searchList(page, searchPagination.title);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    setSearchIndex(data);
    setSearchPagination({...searchPagination, page, hasNextPage: paging.hasNextPage});
    setSearchLoading(false);
  };

  const listMoreIndex = async () => {
    setSearchLoading(true);
    const {page: prePage} = searchPagination;
    const page = prePage + 1;
    const {statusCode, message, data, paging} = await togetherApi.searchList(page, searchPagination.title);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const newIndex = searchIndex.concat(data);

    setSearchIndex(newIndex);
    setSearchPagination({...searchPagination, page, hasNextPage: paging.hasNextPage});
    setSearchLoading(false);
  };

  const mapIndex = async () => {
    setSearchLoading(true);
    const coordinates = await getLatestLocation();
    if (!coordinates) {
      return setWarningAlertVisible('내 위치를 가져오는데 실패했습니다.', '잠시 후에 다시 시도해주세요.');
    }
    const {latitude: lat, longitude: lon} = coordinates;

    const {statusCode, message, data} = await togetherApi.searchMap(searchPagination.title);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    setSearchIndex(data);
    setSearchPagination({...searchPagination, lat, lon});
    setSearchLoading(false);
  };

  const changeSearchTitle = (text: string) => {
    setSearchPagination({...searchPagination, title: text});
  };

  const initSearchCategories = () => {
    setSearchCategories([]);
  };

  const changeSearchCategoriesStatus = (id: number) => {
    const isAdded = searchCategories.find((categoryId) => categoryId === id);
    if (isAdded) {
      return deleteSearchCategories(id);
    }

    return addSearchCategories(id);
  };

  const addSearchCategories = (id: number) => {
    const newCategories = searchCategories.concat(id);
    setSearchCategories(newCategories);
  };

  const deleteSearchCategories = (id: number) => {
    const newCategories = searchCategories.filter((activityId) => activityId !== id);
    setSearchCategories(newCategories);
  };

  const changeSearchVisible = () => {
    setSearchVisible(!searchVisible);
  };

  const getTogetherThumbnail = (Img) => {
    if (Img) {
      return {uri: BASE_URL + '/' + Img};
    } else {
      return require('../../assets/photo_4.jpeg');
    }
  };

  const getTogetherActivityImage = (Img) => {
    if (Img) {
      return {uri: BASE_URL + '/' + Img};
    } else {
      return require('../../assets/active_skate.png');
    }
  };

  const getTogetherProfile = (Img) => {
    if (Img) {
      return {uri: BASE_URL + '/' + Img};
    } else {
      return {uri: BASE_URL + '/public/user/no_profile.png'};
    }
  };

  const createRoomData = (name: string, selectedData: any) => {
    setCreateRoom({
      ...createRoom,
      [name]: selectedData,
    });
  };

  const createRoomFeedData = (feedData: number, thumbnailData: string, addressData: string) => {
    setCreateRoom({
      ...createRoom,
      feed: feedData,
      thumbnail: thumbnailData,
      address: addressData,
    });
  };

  const onChangeRoom = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setCreateRoom({
      ...createRoom,
      [name]: value,
    });
  };

  const pickTogetherDate = (date) => {
    setCreateRoom({
      ...createRoom,
      togetherDate: date,
    });
  };

  const pickTogetherPublic = (e) => {
    setCreateRoom({
      ...createRoom,
      isPublic: e.value,
    });
  };

  const togetherOpen = async () => {
    const requestOpen = {
      title: createRoom.title,
      description: createRoom.description,
      recommend: createRoom.recommend,
      notice: createRoom.notice,
      togetherDate: createRoom.togetherDate.toString(),
      limitDate: createRoom.togetherDate.toString(),
      togetherPlace: createRoom.togetherPlace,
      maxMember: Number(createRoom.maxMember),
      togetherPrice: Number(createRoom.togetherPrice),
      isPublic: createRoom.isPublic,
      togetherTags: createRoom.togetherTags,
      feed: Number(createRoom.feed),
      activity: createRoom.activity,
    };
    const {statusCode} = await togetherApi.userOpenRoom(requestOpen);
    if (statusCode !== 201) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <TogetherContext.Provider
      value={{
        getTogetherThumbnail,
        getTogetherActivityImage,
        getTogetherProfile,
        createRoom,
        createRoomData,
        createRoomFeedData,
        onChangeRoom,
        pickTogetherDate,
        pickTogetherPublic,
        togetherOpen,
        changeSearchVisible,
        searchVisible,
        searchCategories,
        searchIndex,
        searchLoading,
        searchPagination,
        initSearchCategories,
        changeSearchCategoriesStatus,
        changeSearchTitle,
        listIndex,
        listMoreIndex,
        mapIndex,
      }}>
      {children}
    </TogetherContext.Provider>
  );
};

export default TogetherContext;
