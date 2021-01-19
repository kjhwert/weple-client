import React, {createContext, ReactNode, useState} from 'react';
import {BASE_URL} from '../../module/common';

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

  ////////////////////////////////////////////////////////////////
  // USER CREATE ROOM CONTEXT
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
    isPublic: true,
    feed: 0,
    activity: 0,
  });
  console.log('createRoom', createRoom);

  const createRoomData = (name: string, selectedData: any) => {
    setCreateRoom({
      ...createRoom,
      [name]: selectedData,
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

  return (
    <TogetherContext.Provider
      value={{
        getTogetherThumbnail,
        getTogetherActivityImage,
        createRoom,
        createRoomData,
        onChangeRoom,
        pickTogetherDate,
      }}>
      {children}
    </TogetherContext.Provider>
  );
};

export default TogetherContext;
