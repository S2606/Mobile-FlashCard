export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export const fetchDecks = decks => ({
    type: FETCH_DECKS,
    decks,
});

export const addDeck = title => ({
    type: ADD_DECK,
    title,
});

export const addCardToDeck = (deckId, card) => {
    return {
        type: ADD_CARD,
        deckId,
        card
    };
}