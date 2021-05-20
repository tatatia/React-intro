import {combineReducers} from 'redux'
import weatherReducer from "./weather/reducers"

const rootReducers = combineReducers({
        weatherReducer
    }
)

export default rootReducers
