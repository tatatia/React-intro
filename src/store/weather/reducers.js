import {FETCH_WEATHER_FINISH, FETCH_WEATHER_START, INIT_CITIES} from "./types"

export const initialState = {
    cities: [],
    isLoading: false
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_CITIES:
            return {
                ...state,
                cities: action.citiesList.map((elem) => ({name: elem}))
            }
        case FETCH_WEATHER_START:
            return {
                ...state,
                isLoading: true,
                cityName: action.cityName
            }
        case FETCH_WEATHER_FINISH:
            let pos = undefined
            for (let i = 0; i < state.cities.length; i++) {
                if (state.cities[i].name === state.cityName) {
                    pos = i
                    break
                }
            }
            const newCities = [...state.cities]
            newCities[pos] = action.weatherData
            return {
                ...state,
                isLoading: false,
                cities: newCities
            }
        default:
            return state
    }
}