import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DeckItem from './DeckItem';
import { connect } from 'react-redux';

/**
 * Component for viewing details of an individual deck
 */

const DetailDeck = props => {
    const { deck, navigation } = props;

    const title = deck.title

    return (
        <View style={styles.container}>
        <DeckItem id={deck.title} />
        <View style={{alignItems: 'center', marginBottom: 20}}>
            <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AddCard', {title});
                    }}
                    style={{marginBottom: 20}}>
                    <Text style={styles.btnText}>Add Card</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Quiz', {title});
                }}
                style={styles.startQuiz}>
                <Text style={styles.btnText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
      backgroundColor: '#dfdfdf'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
      },
});

const mapStateToProps = (state, { navigation }) => {
    const title = navigation.getParam('title', 'undefined');
    const deck = state["deck"][title];
  
    return {
        deck
    };
};

export default connect(
    mapStateToProps
)(DetailDeck);