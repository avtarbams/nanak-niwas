import { config } from "../constants";
import { fetchGETApiData } from "../network";
import { TYPES } from "./Constant";


export function HomePageReducer(state: {}, action: any) {
    switch (action.type) {
        case TYPES.HOMEPAGESECTIONS:
            return { ...state, HOMEPAGESECTIONS: action.payload };
        case TYPES.HOMEPAGECARDS:
            return { ...state, HOMEPAGECARDS: action.payload };
        default:
            return { ...state }
    }
}


export function fetchHomePageData() {
    const apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/' + config.spreadsheetId +
        '/values/Sheet1!A2%3AB?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&fields=values&key='
        + config.apiKey;
    return (dispatch: any) => {
        fetchGETApiData(apiUrl, {}, TYPES.HOMEPAGESECTIONS, dispatch)
    }
}

export function fetchHomePageDataForCards() {
    const apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/' + config.spreadsheetId +
        '/values/Sheet2!A2%3AB?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&fields=values&key='
        + config.apiKey;
    return (dispatch: any) => {
        fetchGETApiData(apiUrl, {}, TYPES.HOMEPAGECARDS, dispatch)
    }
}
