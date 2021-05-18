import React, {useContext, useEffect, useState} from 'react';
import TogetherSearchPresenter from './TogetherSearchPresenter';
import {togetherApi} from '../../../module/api';
import AlertContext from '../../../module/context/AlertContext';
import {ITogethers} from '../../../module/type/together';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {listIndex}: any = useContext(TogetherContext);

  useEffect(() => {
    listIndex();
  }, []);

  return <TogetherSearchPresenter navigation={navigation} />;
};
