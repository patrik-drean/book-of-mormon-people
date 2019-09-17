export const CHANGE_CARD_PERSON = 'CHANGE_CARD_PERSON';
export const CHANGE_CARD_SIDE = 'CHANGE_CARD_SIDE';

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