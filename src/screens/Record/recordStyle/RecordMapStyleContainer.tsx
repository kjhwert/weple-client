import React, {useEffect, useState} from 'react';
import RecordMapStylePresenter from './RecordMapStylePresenter';
import {utilitiesApi} from '../../../module/api';
import Loading from '../../../components/Loading';

const FreeMap = [
  {
    id: 0,
    image: require('../../../assets/mapStyle_3.png'),
  },
  {
    id: 1,
    image: require('../../../assets/mapStyle_3.png'),
  },
  {
    id: 2,
    image: require('../../../assets/mapStyle_3.png'),
  },
];

const MembershipMap = [
  {
    id: 0,
    image: require('../../../assets/mapStyle_1.png'),
  },
  {
    id: 1,
    image: require('../../../assets/mapStyle_2.png'),
  },
  {
    id: 2,
    image: require('../../../assets/mapStyle_4.png'),
  },
  {
    id: 3,
    image: require('../../../assets/mapStyle_5.png'),
  },
  {
    id: 4,
    image: require('../../../assets/mapStyle_1.png'),
  },
  {
    id: 5,
    image: require('../../../assets/mapStyle_2.png'),
  },
  {
    id: 6,
    image: require('../../../assets/mapStyle_4.png'),
  },
  {
    id: 7,
    image: require('../../../assets/mapStyle_5.png'),
  },
  {
    id: 8,
    image: require('../../../assets/mapStyle_1.png'),
  },
];

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

  return loading ? (
    <Loading />
  ) : (
    <RecordMapStylePresenter
      navigation={navigation}
      mapGroup={mapGroup}
      FreeMap={FreeMap}
      MembershipMap={MembershipMap}
    />
  );
};
