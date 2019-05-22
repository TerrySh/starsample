import { StarAction } from '../actions';
import { StoreState } from '../types/StoreState';

import { DECREMENT_STARNUM, INCREMENT_STARNUM } from '../constants/index';


export function star(state: StoreState, action: StarAction): StoreState {
    switch (action.type) {
        case INCREMENT_STARNUM:
            return { ...state, starNum: state.starNum + 1};
        case DECREMENT_STARNUM:
            return { ...state, starNum: state.starNum - 1};

    }

    return state;
}

