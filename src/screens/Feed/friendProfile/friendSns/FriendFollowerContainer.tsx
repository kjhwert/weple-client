import React from 'react';

import UserFollowComponent from '../../../../components/UserFollowComponent';

interface IProps {
  navigation: any;
  route: {
    params: {id: number};
  };
}

export default (props: IProps) => {
  return <UserFollowComponent {...props} />;
};
