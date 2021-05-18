import React, {useContext, useEffect, useState} from 'react';
import TermsPresenter from './TermsPresenter';
import {serviceApi} from '../../../../../module/api';
import AlertContext from '../../../../../module/context/AlertContext';
import CheckAlert from '../../../../../components/CheckAlert';
import Loading from '../../../../../components/Loading';

interface IProps {
  navigation: any;
}

interface Term {
  id: number;
  title: string;
  description: string;
}

export default ({navigation}: IProps) => {
  const {setWarningAlertVisible} = useContext(AlertContext) as IAlertContext;
  const [termsList, setTermsList] = useState<Term[]>([
    {
      id: 1,
      title: '',
      description: '',
    },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  const getTerms = async () => {
    setLoading(true);
    const {data, statusCode} = await serviceApi.terms();

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', '잠시 후에 다시 시도해주세요.');
    }

    setTermsList(data);
    setLoading(false);
  };

  useEffect(() => {
    getTerms();
  }, []);
  return loading ? <Loading /> : <TermsPresenter navigation={navigation} termsList={termsList} />;
};
