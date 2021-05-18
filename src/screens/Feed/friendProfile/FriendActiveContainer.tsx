import React from 'react';
import UserProfileComponent from '../../../components/UserProfileComponent';

interface IProps {
  navigation: any;
  route: {
    params: {id: number};
  };
}

export default (props: IProps) => {
  return <UserProfileComponent {...props} />;
};
