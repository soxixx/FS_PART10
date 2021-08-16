import React from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import useAuthUser from '../hooks/useAuthUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection:'row',
    marginTop: 20,
    marginBottom:20
  },
  tabFontColor:{
    color:'white',
    fontSize:20
  },
});

const AppBar = () => {
  const { authorizedUser } = useAuthUser();
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable >
          <Link to="/">
            <Text style={styles.tabFontColor}>Repositories  </Text>
          </Link>
        </Pressable> 
        {!authorizedUser ?
          <Pressable >
            <Link to="/signin">
              <Text style={styles.tabFontColor}>Sign in </Text> 
            </Link>
          </Pressable>
        :
          <Pressable >
            <Link to="/signout">
              <Text style={styles.tabFontColor}>Sign out </Text> 
            </Link>
          </Pressable> 
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;