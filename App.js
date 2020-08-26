import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/components/AppNavigator'
import { setLocalNotification } from './src/utils/notificationAPI';

const store = createStore(reducer);

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde'
  }
});
