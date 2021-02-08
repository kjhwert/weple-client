import React, {useContext, useState, useEffect} from 'react';
import ProfilePresenter from './ProfileActivePresenter';
import AlertContext from '../../module/context/AlertContext';
import SortAlert from '../../components/SortAlert';
import UserContext from '../../module/context/UserContext';
import {userApi} from '../../module/api';
import {IProfileUserInfo} from '../../module/type/user';
import Loading from '../../components/Loading';
import UserProfileComponent from '../../components/UserProfileComponent';

interface IProps {
  navigation: any;
  route: any;
}

export default (props: IProps) => {
  return <UserProfileComponent {...props} />;
};
