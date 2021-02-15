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

interface IUserCategories {
  category: {
    color: string;
    id: number;
    image: string;
    name: string;
  };
  id: number;
}

interface IActivity {
  categoryActivity: Array<ICategoryActivity>;
  id: number;
  name: string;
}

interface ICategoryActivity {
  caloriesPerMinute: number;
  id: number;
  name: string;
  isSelect: boolean;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible, setWarningAlertVisible}: any = useContext(AlertContext);

  const [isActive, setIsActive] = useState(false);
  const [activities, setActivities] = useState([]);
  const [userCategories, setUserCategories] = useState<Array<number>>([]);
  const [initCategories, setInitCategories] = useState<Array<number>>([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    setLoading(true);
    const {data, statusCode, message} = await categoryApi.activities();
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const categories: number[] = await getUserCategories();
    const activities = data.map((activity: IActivity) => {
      const categoryActivity = activity.categoryActivity.map((category) => {
        if (categories.includes(category.id)) {
          return {...category, isSelect: true};
        }

        return {...category, isSelect: false};
      });
      return {...activity, categoryActivity};
    });
    setActivities(activities);
    setUserCategories(categories);
    setInitCategories(categories);
    setLoading(false);
  };

  const getUserCategories = async () => {
    const {data, statusCode, message} = await userApi.getCategory();
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    return data.map(({category}: IUserCategories) => category.id);
  };

  const selectCategories = (categoryId: number, isSelect: boolean) => {
    const results = activities.map((activity: IActivity) => {
      const categoryActivity = activity.categoryActivity.map((category) => {
        if (category.id === categoryId) {
          return {...category, isSelect: !category.isSelect};
        }
        return category;
      });
      return {...activity, categoryActivity};
    });

    changeUserCategories(categoryId, isSelect);
    setActivities(results);
  };

  const changeUserCategories = (categoryId: number, isSelect: boolean) => {
    if (isSelect) {
      const newCategories = userCategories.filter((id) => id !== categoryId);
      changeActiveStatus(newCategories);
      setUserCategories(newCategories);
      return;
    }

    const newCategories = userCategories.concat(categoryId);
    changeActiveStatus(newCategories);
    setUserCategories(newCategories);
  };

  const changeActiveStatus = (newCategories: number[]) => {
    if (
      newCategories.length === initCategories.length &&
      newCategories.every((val, index) => val === initCategories[index])
    ) {
      setIsActive(false);
      return;
    }

    setIsActive(true);
  };

  const updateUserCategories = async () => {
    const {statusCode, message} = await userApi.putCategory({categories: userCategories});
    if (statusCode !== 201) {
      return setWarningAlertVisible('카테고리 수정에 실패했습니다.', message);
    }

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
  };

  useEffect(() => {
    getCategories();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SetCategoryPresenter
      navigation={navigation}
      activities={activities}
      selectCategories={selectCategories}
      isActive={isActive}
      updateUserCategories={updateUserCategories}
    />
  );
};
