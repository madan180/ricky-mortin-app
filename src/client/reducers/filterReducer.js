import { TRIGGER_FILTER, RESET_FILTER } from '../actions/actionTypes';

const filterNames = (state, actionPayload) => {
  if (state.length === 0) {
    const filterItem = {
      name: actionPayload.name,
      values: [actionPayload.value],
    };
    state.push(filterItem);
    return [...state];
  }
  const filterItem = state.find((item) => item.name === actionPayload.name);
  if (filterItem) {
    const filterSubItem = filterItem.values.find(
      (subItem) => subItem.label === actionPayload.value.label
    );
    if (filterSubItem) {
      filterSubItem.checked = actionPayload.value.checked;
      return [...state];
    }
    filterItem.values.push(actionPayload.value);
    return [...state];
  }
  state.push({ name: actionPayload.name, values: [actionPayload.value] });
  return [...state];
};

export default (state = [], action) => {
  switch (action.type) {
    case TRIGGER_FILTER:
      return filterNames(state, action.payload);
    case RESET_FILTER:
        return [];
    default:
      return state;
  }
};
