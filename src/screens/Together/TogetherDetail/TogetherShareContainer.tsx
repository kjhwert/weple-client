import React from 'react';
import TogetherSharePresenter from './TogetherSharePresenter';
import {ITogether} from '../../../module/type/together';

interface IProps {
  navigation: any;
  route: {params: {together: ITogether}};
}

export default (props: IProps) => {
  return <TogetherSharePresenter {...props} />;
};
