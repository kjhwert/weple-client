import React, {useEffect, useState} from 'react';
import RecordActiveTypePresenter from './RecordActiveTypePresenter';
import {categoryApi} from '../../../module/api';
import Loading from '../../../components/Loading';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const getActivities = async () => {
    const {data, statusCode} = await categoryApi.activities();
    if (statusCode === 200) {
      setActivities(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  return loading ? <Loading /> : <RecordActiveTypePresenter navigation={navigation} activities={activities} />;
};
