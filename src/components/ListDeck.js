import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import DeckItem from './DeckItem';
import { getDecks } from '../utils/storageAPI';
import { fetchDecks } from '../actions/deck'

/**
 * Component for viewing list of decks
 */

class ListDeck extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        getDecks().then(decks => {
            dispatch(fetchDecks(decks));
        });
    }

    render() {

        const { decks, navigation } = this.props;

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Mobile Flashcards</Text>
                {Object.values(decks["deck"]).map(item => {
                return (
                    <TouchableOpacity
                        key={item.title}
                        onPress={() =>
                            navigation.navigate('DetailDeck', { title: item.title })
                          }
                        >
                        <DeckItem
                            id={item.title}
                        />
                    </TouchableOpacity>
                    );
                })}
                <View style={{ marginBottom: 30 }} />
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 56,
        paddingBottom: 36,
      },
      title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#008ae6'
      }
});

export default connect(mapStateToProps)(ListDeck);
