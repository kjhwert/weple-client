import React, {useContext, useEffect} from 'react';
import ActiveDetailPresenter from './ActiveDetailPresenter';
import FeedContext from '../../module/context/FeedContext';
import {IFeedContext} from '../../module/type/feedContext';
import Loading from '../../components/Loading';

interface IProps {
  navigation: any;
  route: {
    params: {
      id: number;
    };
  };
}

export default ({navigation, route}: IProps) => {
  const {show, getShow, showLoading}: any = useContext(FeedContext);

  const reload = () => {
    const id = route.params.id;
    if (!show) {
      return getShow(id);
    }

    if (show.id !== id) {
      return getShow(id);
    }
  };

  useEffect(() => {
    reload();
  }, [route]);

  return showLoading ? <Loading /> : <ActiveDetailPresenter navigation={navigation} feed={show} />;
};
