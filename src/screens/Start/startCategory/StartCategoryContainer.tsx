import React, {useEffect, useState} from 'react';
import StartCategoryPresenter from './StartCategoryPresenter';
import {categoryApi} from '../../../module/api';
import Loading from '../../../components/Loading';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const getActivities = async () => {
    const {data, status} = await categoryApi.activities();
    setActivities(data);
    setLoading(false);
    console.log(result);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <StartCategoryPresenter navigation={navigation} activities={activities} />
  );
};
