import {CHANGE_CARD_PERSON} from '../actions/actions'
import {CHANGE_CARD_SIDE} from '../actions/actions'

const initialState = {
    person: {
        name: '',
        description: '',
    },
    isFlipped: false,
    flipSpeed: .6
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CARD_PERSON:
            return {
                ...state,
                person: action.person
            }
        case CHANGE_CARD_SIDE:
            return {
                ...state,
                isFlipped: action.isFlipped,
                flipSpeed: action.flipSpeed
            }
        default:
            return state;
    }
}

export default reducer;