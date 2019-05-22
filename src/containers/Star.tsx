import Star from '../components/Star';
import * as actions from '../actions';
import { StoreState } from '../types/StoreState';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


export function mapStatetoProps({starNum, languageName}: StoreState) {
    return {
        name: languageName,
        starNum
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.StarAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementStarNum()),
        onDecrement: () => dispatch(actions.decrementStarNum()),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Star);