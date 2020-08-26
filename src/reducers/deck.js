import {FETCH_DECKS, ADD_DECK, ADD_CARD} from '../actions/deck'

function deck(state = {}, action) {
    switch (action.type) {
        case FETCH_DECKS:
            return {...state, ...action.decks};

        case ADD_DECK:
            const { title } = action;
            return {
                ...state,
                [title]: {
                title,
                questions: []
                }
            };
        case ADD_CARD:
            const { deckId, card } = action;
            return {
                ...state,
                [deckId]: {
                ...state[deckId],
                questions: [...state[deckId].questions].concat(card)
                }
            };

        default:
            return state;
    }
}

export default deck;