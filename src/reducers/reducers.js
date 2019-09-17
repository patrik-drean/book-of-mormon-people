import {CHANGE_CARD_PERSON,CHANGE_CARD_SIDE, TOGGLE_QUIZ_MODE} from '../actions/actions';
const initialState = {
    person: {
        name: '',
        description: '',
    },
    isFlipped: false,
    flipSpeed: .6,
    isNameShownFirst: false,
    nameOrientation: "front",
    descriptionOrientation: "back",
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
        case TOGGLE_QUIZ_MODE:
            return {
                ...state,
                isNameShownFirst: action.isNameShownFirst,
                nameOrientation: state.descriptionOrientation,
                descriptionOrientation: state.nameOrientation
            }
        default:
            return state;
    }
}

export default reducer;