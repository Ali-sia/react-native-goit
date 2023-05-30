import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getUser } from '../redux/auth/authSelector';
import { auth } from '../firebase/config';

import useRoute from '../../routing/router';
import { authStateChangeUser } from '../redux/auth/authOperation';

const Main = () => {
  const userDB = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = useRoute(userDB.stateChange);

  //   const routing = useRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
