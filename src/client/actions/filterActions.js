import { TRIGGER_FILTER, RESET_FILTER } from './actionTypes';

export const triggerFilter = (filterType, filterValue, checkedState) => ({
    type: TRIGGER_FILTER,
    payload: {name: filterType, value: {label: filterValue, checked: checkedState}}
});

export const resetFilter = (filterType, filterValue, checkedState) => ({
    type: RESET_FILTER,
})