import { createFetchType } from '../../helpers/index.js';

export const COMPLETE_TODO = createFetchType('tasks/COMPLETE_TODO');
export const ADD_TODO = createFetchType('tasks/ADD_TODO');
export const REMOVE_TODO = createFetchType('tasks/REMOVE_TODO');

export const COMPLETE_HABIT = createFetchType('tasks/COMPLETE_HABIT');
export const ADD_HABIT = createFetchType('tasks/ADD_HABIT');
export const REMOVE_HABIT = createFetchType('tasks/REMOVE_HABIT');

export const COMPLETE_DAILY = createFetchType('tasks/COMPLETE_DAILY');
export const ADD_DAILY = createFetchType('tasks/ADD_DAILY');
export const REMOVE_DAILY = createFetchType('tasks/REMOVE_DAILY');

export const CHANGE_TAB = 'tasks/CHANGE_TAB';
