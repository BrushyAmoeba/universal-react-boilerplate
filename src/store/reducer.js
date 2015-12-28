// third party imports
import {combineReducers} from 'redux'
import {responsiveStateReducer} from 'redux-responsive'
// local imports


// combine and export the reducers
export default combineReducers({
    browser: responsiveStateReducer,
})
