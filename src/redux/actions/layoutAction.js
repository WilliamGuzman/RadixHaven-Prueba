import { EVENT_CLICK } from '../types';

//Action Click
export function eventClick(click){
    
    return (dispatch) => {
        dispatch( changeClick(click) );
    }
}

//Change Click
const changeClick = click => ({
    type: EVENT_CLICK,
    payload: click
})