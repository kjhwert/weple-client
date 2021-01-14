import React, {createContext, ReactNode, useState} from 'react';

const TogetherContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const TogetherContextProvider = ({children}: IProps) => {
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
    feed: 70,
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

  return (
    <TogetherContext.Provider value={{createRoom, createRoomData, onChangeRoom}}>{children}</TogetherContext.Provider>
  );
};

export default TogetherContext;
