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
