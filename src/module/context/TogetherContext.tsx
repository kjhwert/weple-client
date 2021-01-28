import React, {createContext, ReactNode, useState} from 'react';
import {BASE_URL} from '../../module/common';
import {togetherApi} from '../../module/api';

const TogetherContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const TogetherContextProvider = ({children}: IProps) => {
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
      }}>
      {children}
    </TogetherContext.Provider>
  );
};

export default TogetherContext;
