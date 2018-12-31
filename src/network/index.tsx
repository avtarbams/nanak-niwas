import axios from 'axios';



/**
* fetch API data
* @param request API request Object
* @param url API URL
* @param dispatch Dispact object to dispatch to reducers
* @param actionType ACtion Type for the Actions
*/
export function fetchGETApiDataWithCallback(url: string, request: any, callBack: any, callBackFail: any) {
    axios.get(url, request)
        // tslint:disable-next-line:only-arrow-functions
        .then(function (response) {
            callBack(response.data);
        })
        // tslint:disable-next-line:only-arrow-functions
        .catch(function (error) {
            callBackFail(error);
        });
}

/**
* Post API data
* @param request API request Object
* @param url API URL
* @param dispatch Dispact object to dispatch to reducers
* @param actionType ACtion Type for the Actions
*/
export function POSTApiDataWithCallback(url: string, request: any, callBack: any, callBackFail: any) {
    axios.post(url, request)
        // tslint:disable-next-line:only-arrow-functions
        .then(function (response) {
            callBack(response.data);
        })
        // tslint:disable-next-line:only-arrow-functions
        .catch(function (error) {
            callBackFail(error);
        });
}




/**
* fetch API data
* @param request API request Object
* @param url API URL
* @param dispatch Dispact object to dispatch to reducers
* @param actionType ACtion Type for the Actions
*/
export function fetchGETApiData(url: string, request: any, actionType: any, dispatch: any) {
    axios.get(url, request)
        // tslint:disable-next-line:only-arrow-functions
        .then(function (response) {
            // tslint:disable-next-line:prefer-object-spread
            dispatch({ type: actionType, payload: response.data });

        })
        // tslint:disable-next-line:only-arrow-functions
        .catch(function (error) {
            dispatch({ type: actionType, payload: false });
        });
}

