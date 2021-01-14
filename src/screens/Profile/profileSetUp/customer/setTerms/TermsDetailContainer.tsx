import React, {useState} from 'react';
import TermsDetailPresenter from './TermsDetailPresenter';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [termsDetail, setTermsDetail] = useState({
    id: route.params?.id,
    title: route.params?.title,
    description: route.params?.description,
  });

  return <TermsDetailPresenter navigation={navigation} termsDetail={termsDetail} />;
};
