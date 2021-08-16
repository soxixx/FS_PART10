import React from 'react';
// import Constants from 'expo-constants';
import {  StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';

import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignOut from './SignOut';

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.mainBackground,
  },
  appBar:{
    backgroundColor: theme.colors.appBarBackground,
  }
});

const Main = () => {
  return (
    <View style={styles.main}>
      <View style={styles.appBar}>
        <AppBar />
      </View>
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signout">
          <SignOut />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;