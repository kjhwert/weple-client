import React, {useContext, useEffect} from 'react';
import ActiveDetailPresenter from './ActiveDetailPresenter';
import FeedContext from '../../module/context/FeedContext';
import {IFeedContext} from '../../module/type/feedContext';
import Loading from '../../components/Loading';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {show, getShow, showLoading}: IFeedContext = useContext(FeedContext);

  useEffect(() => {
    route?.params?.id && getShow(route.params.id);
  }, []);

  return showLoading ? <Loading /> : <ActiveDetailPresenter navigation={navigation} feed={show} />;
};
