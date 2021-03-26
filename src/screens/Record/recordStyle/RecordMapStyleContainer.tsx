import React, {useEffect, useState} from 'react';
import RecordMapStylePresenter from './RecordMapStylePresenter';
import {utilitiesApi} from '../../../module/api';
import Loading from '../../../components/Loading';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [mapGroup, setMapGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMaps = async () => {
    setLoading(true);
    const {data, statusCode, message} = await utilitiesApi.maps();
    if (statusCode !== 200) {
      // Error message
      console.log(message);
      return;
    }
    setMapGroup(data);
    setLoading(false);
  };

  useEffect(() => {
    getMaps();
  }, []);

  return loading ? <Loading /> : <RecordMapStylePresenter navigation={navigation} mapGroup={mapGroup} />;
};
