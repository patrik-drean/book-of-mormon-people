export const CHANGE_CARD_PERSON = 'CHANGE_CARD_PERSON';
export const CHANGE_CARD_SIDE = 'CHANGE_CARD_SIDE';
export const TOGGLE_QUIZ_MODE = 'TOGGLE_QUIZ_MODE';

export function changeCardPerson(person) {
    return {
        type: CHANGE_CARD_PERSON,
        person
    }
}

export function changeCardSide(isFlipped, flipSpeed) {
    return {
        type: CHANGE_CARD_SIDE,
        isFlipped,
        flipSpeed
    }
}

export function toggleQuizMode(isNameShownFirst) {
    return {
        type: TOGGLE_QUIZ_MODE,
        isNameShownFirst
    }
}