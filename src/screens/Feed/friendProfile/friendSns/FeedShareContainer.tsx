import React from 'react';
import RecordPlayComponent from '../../../../components/RecordPlayComponent';
import {IShowFeed} from '../../../../module/type/feedContext';

interface IProps {
  navigation: any;
  route: {
    params: {
      feed: IShowFeed;
    };
  };
}

export default (props: IProps) => {
  return <RecordPlayComponent {...props} />;
};
