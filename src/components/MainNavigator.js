import React from 'react';
import * as Icon from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import ListDeck from '../components/ListDeck';
import CreateDeck from '../components/CreateDeck';
import DetailDeck from '../components/DetailDeck';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';

const routeConfigs = {
  Decks: {
    screen: ListDeck,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <Icon.Ionicons
          name={'md-bookmarks'}
          size={30}
          color={tintColor}
        />
      )
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: ({ tintColor }) => (
        <Icon.FontAwesome name="plus-square" size={30} color={tintColor} />
      )
    }
  }
};

const tabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  defaultNavigationOptions: {
    bounces: true
  },
  tabBarOptions: {
    activeTintColor: '#008ae6',
    style: {
      height: 60,
      backgroundColor: '#fff',
      shadowColor: 'rgba(0,0,0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      borderTopWidth: 1,
      borderTopColor: '#666'
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    tabStyle: {
      marginTop: 5,
      marginBottom: 3
    },
    showIcon: true
  }
};

const Tabs = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs
    },
    DetailDeck: {
      screen: DetailDeck,
      navigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#008ae6'
        },
        title: 'Deck Details'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#008ae6'
        },
        headerTitleStyle: {
          justifyContent: 'center',
          textAlign: 'center'
        },
        title: 'Add Card'
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#008ae6'
        },
        title: 'Quiz'
      }
    }
  },
  { headerLayoutPreset: 'center' }
);

export default MainNavigator;