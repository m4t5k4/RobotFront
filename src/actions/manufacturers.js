import myApi from '../apis/my_api';

/*
* action types
*/

export const LOAD_MANUFACTURERS_SUCCESS = 'LOAD_MANUFACTURERS_SUCCESS';
export const CREATE_MANUFACTURER_SUCCESS = 'CREATE_MANUFACTURER_SUCCESS';
export const EDIT_MANUFACTURER = 'EDIT_MANUFACTURER';
export const UPDATE_MANUFACTURER_SUCCESS = 'UPDATE_MANUFACTURER_SUCCESS';
export const DELETE_MANUFACTURER_SUCCESS = 'DELETE_MANUFACTURER_SUCCESS';

/*
 * action creators
 */

export function loadManufacturersSuccess(manufacturers) {
    return {type: LOAD_MANUFACTURERS_SUCCESS, manufacturers};
}

export function createManufacturerSuccess (manufacturer) {
    return { type: CREATE_MANUFACTURER_SUCCESS, manufacturer }
}

export function editManufacturer (manufacturerID) {
    return { type: EDIT_MANUFACTURER, manufacturerID }
}

export function updateManufacturerSuccess (manufacturer) {
    return { type: UPDATE_MANUFACTURER_SUCCESS, manufacturer }
}

export function deleteManufacturerSuccess (manufacturer) {
    return { type: DELETE_MANUFACTURER_SUCCESS, manufacturer }
}

export function loadManufacturers() {
    return (dispatch) => {
        return myApi.getAllManufacturers().then(
            (result) => {
                dispatch(loadManufacturersSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function createManufacturer (manufacturer) {
    return (dispatch) => {
        return myApi.createManufacturer(manufacturer).then(
            (result) => {
                dispatch(createManufacturerSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}

export function updateManufacturer (manufacturer) {
    return (dispatch) => {
        return myApi.updateManufacturer(manufacturer).then(
            (result) => {
                dispatch(updateManufacturerSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}

export function deleteManufacturer (manufacturerID) {
    return (dispatch) => {
        return myApi.deleteManufacturer(manufacturerID).then(
            (result) => {
                dispatch(deleteManufacturerSuccess(result.data));
            },
            (error) => {
                throw (error);
            }
        );
    };
}