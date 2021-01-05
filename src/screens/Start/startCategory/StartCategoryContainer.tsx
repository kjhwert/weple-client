import React, {useEffect, useState, useContext} from 'react';
import StartCategoryPresenter from './StartCategoryPresenter';
import {categoryApi} from '../../../module/api';
import Loading from '../../../components/Loading';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createUserData}: any = useContext(UserContext);

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

  const categoriesClick = (catId, selectId) => {
    const newCategory = activities.map((item) =>
      item.id === catId
        ? {
            ...item,
            categoryActivity: categoriesActivityClick(selectId, item.categoryActivity),
          }
        : item,
    );
    setActivities(newCategory);
  };

  const categoriesActivityClick = (selectId, categoryActivity) => {
    const subCategory = categoryActivity.map((item) =>
      item.id === selectId ? {...item, isSelect: !item.isSelect} : item,
    );
    return subCategory;
  };

  const checkSelect = () => {
    setIsActive(false);
    activities.map((item) => item.categoryActivity.map((subItem) => (subItem.isSelect ? setIsActive(true) : {})));
  };

  const getSelectedActivity = () => {
    const selectActivities = [];
    activities.map((item) =>
      item.categoryActivity.map((subItem) => (subItem.isSelect ? selectActivities.push(subItem.id) : null)),
    );
    return selectActivities;
  };

  const createUserCategory = () => {
    createUserData('activityCategories', getSelectedActivity());
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
    <StartCategoryPresenter
      navigation={navigation}
      activities={activities}
      categoriesClick={categoriesClick}
      isActive={isActive}
      createUserCategory={createUserCategory}
    />
  );
};
