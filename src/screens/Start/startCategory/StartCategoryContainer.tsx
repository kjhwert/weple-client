import React, {useEffect, useState} from 'react';
import StartCategoryPresenter from './StartCategoryPresenter';
import {categoryApi} from '../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [activities, setActivities] = useState([]);

  const getActivities = async () => {
    const result = await categoryApi.activities();
    setActivities(result);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <StartCategoryPresenter navigation={navigation} activities={activities} />
  );
};
