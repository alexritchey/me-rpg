/**
 * Checks each item's id property for a match
 * @param {array} list 
 * @param {number} id 
 */
export const getIndexById = (list, id) => {
    return list.findIndex(item => {
        return item.id === id;
    });
};

/**
 * Constructs an object supplying properties for request, success, and failure actions.
 * @param {string} type - The Redux action type
 */
export const createFetchType = (type) => {
    return {
        REQUEST: `${type}_REQUEST`,
        SUCCESS: `${type}_SUCCESS`,
        FAILURE: `${type}_FAILURE`
    };
};