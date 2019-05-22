import * as constants from '../constants';

export interface IncrementStarNum {
    type: constants.INCREMENT_STARNUM
}

export interface DecrementStarNum {
    type: constants.DECREMENT_STARNUM
}

export type StarAction = IncrementStarNum | DecrementStarNum;

export function incrementStarNum(): IncrementStarNum {
    return {
        type: constants.INCREMENT_STARNUM
    }
}

export function decrementStarNum(): DecrementStarNum {
    return {
        type: constants.DECREMENT_STARNUM
    }
}
