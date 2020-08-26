import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

/**
 * Component for displaying a deck item in a list of decks
 */

const DeckItem = props => {
  const { deck } = props;

  if (deck === undefined) {
    return <View style={styles.deckContainer} />;
  }
  return (
    <View style={styles.deckContainer}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View>
            <Text style={styles.deckText}>{deck.title}</Text>
        </View>
        <View>
            <Text style={styles.cardText}>{
            deck.questions.length == 1 ? "1 card" : `${deck.questions.length} cards`
            }</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deckContainer: {
    flexDirection: 'row',
    marginTop: 12,
    height: 120,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckText: {
    fontSize: 24
  },
  cardText: {
    fontSize: 18,
    color: '#666'
  }
});

const mapStateToProps = (state, { id }) => {
  const deck = state["deck"][id];

  return {
    deck
  };
};

export default connect(mapStateToProps)(DeckItem);