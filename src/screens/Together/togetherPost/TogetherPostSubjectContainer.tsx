import React, {useEffect, useState, useContext} from 'react';
import TogetherPostSubjectPresenter from './TogetherPostSubjectPresenter';
import {categoryApi} from '../../../module/api';
import Loading from '../../../components/Loading';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createRoomData}: any = useContext(TogetherContext);

  const [isActive, setIsActive] = useState(false);
  const [activities, setActivities] = useState([
    {
      id: 0,
      name: '',
      categoryActivity: [
        {
          id: 0,
          name: '',
          caloriesPerMinute: 0,
          isSelect: false,
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(true);

  const getActivities = async () => {
    const {data, statusCode} = await categoryApi.activities();
    if (statusCode !== 200) {
    } else {
      setActivities(data);
      setLoading(false);
    }
  };

  const categoriesClick = (selectId: number) => {
    const newCategory = activities.map((item) => ({
      ...item,
      categoryActivity: categoriesActivityClick(selectId, item.categoryActivity),
    }));
    setActivities(newCategory);
  };

  const categoriesActivityClick = (selectId: number, categoryActivity: any) => {
    const subCategory = categoryActivity.map((item) =>
      item.id === selectId ? {...item, isSelect: true} : {...item, isSelect: false},
    );
    return subCategory;
  };

  const checkSelect = () => {
    setIsActive(false);
    activities.map((item) => item.categoryActivity.map((subItem) => (subItem.isSelect ? setIsActive(true) : {})));
  };

  const getSelectedActivity = () => {
    const selectActivities: number[] = [];
    activities.map((item) =>
      item.categoryActivity.map((subItem) => (subItem.isSelect ? selectActivities.push(subItem.id) : {})),
    );
    return selectActivities[0];
  };

  const createUserCategory = () => {
    createRoomData('activity', getSelectedActivity());
  };

  useEffect(() => {
    getActivities();
  }, []);

  useEffect(() => {
    checkSelect();
  }, [activities]);

  return loading ? (
    <Loading />
  ) : (
    <TogetherPostSubjectPresenter
      navigation={navigation}
      activities={activities}
      categoriesClick={categoriesClick}
      isActive={isActive}
      createUserCategory={createUserCategory}
    />
  );
};
