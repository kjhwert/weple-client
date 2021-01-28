import React, {useState, useContext, useEffect} from 'react';
import SetCategoryPresenter from './SetCategoryPresenter';
import {categoryApi} from '../../../../../module/api';
import {userApi} from '../../../../../module/api';
import Loading from '../../../../../components/Loading';
import AlertContext from '../../../../../module/context/AlertContext';
import CheckAlert from '../../../../../components/CheckAlert';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);

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

  const initTotalCategory = async () => {
    setLoading(true);
    const {data, statusCode} = await categoryApi.activities();
    if (statusCode !== 200) {
    } else {
      setActivities(data);
    }
    setLoading(false);
  };

  const initSelectCategory = async () => {
    const {data, statusCode} = await userApi.getCategory();
    const selectActivities: number[] = [];
    if (statusCode !== 200) {
    } else {
      data.map((item: any) => {
        selectActivities.push(item.category.id);
      });
      categories(selectActivities);
    }
  };

  const categories = (selectActivities: number[]) => {
    const newCategory = activities.map((item) => ({
      ...item,
      categoryActivity: categoriesActivity(selectActivities, item.categoryActivity),
    }));
    setActivities(newCategory);
  };
  const categoriesActivity = (selectActivities: number[], categoryActivity: any) => {
    const subCategory = categoryActivity.map((item: any) =>
      selectActivities.includes(item.id) ? {...item, isSelect: true} : item,
    );
    return subCategory;
  };

  const categoriesClick = (catId: number, selectId: number) => {
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
  const categoriesActivityClick = (selectId: number, categoryActivity: any) => {
    const subCategory = categoryActivity.map((item: any) =>
      item.id === selectId ? {...item, isSelect: !item.isSelect} : item,
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
      item.categoryActivity.map((subItem) => (subItem.isSelect ? selectActivities.push(subItem.id) : null)),
    );
    return selectActivities;
  };

  const createUserCategory = async () => {
    const requestCategory = {
      categories: getSelectedActivity(),
    };
    const {statusCode, message} = await userApi.putCategory(requestCategory);
    if (statusCode !== 201) {
    } else {
      setIsActive(true);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'check',
            title: message,
            description: '',
          }}
          checked={() => {
            navigation.navigate('profileSetting');
          }}
        />,
      );
    }
  };

  useEffect(() => {
    initTotalCategory();
  }, []);

  useEffect(() => {
    initSelectCategory();
  }, [loading]);

  useEffect(() => {
    checkSelect();
  }, [activities]);

  return loading ? (
    <Loading />
  ) : (
    <SetCategoryPresenter
      navigation={navigation}
      activities={activities}
      categoriesClick={categoriesClick}
      isActive={isActive}
      createUserCategory={createUserCategory}
    />
  );
};
