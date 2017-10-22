import { combineReducers } from 'redux';
import attributes from './attributes.js';
import equipment from './equipment.js';
import status from './status.js';

export default combineReducers({
    attributes,
    equipment,
    status
});
