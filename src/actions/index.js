export const ADD_DATA = 'ADD_DATA';
export const ADD_NEW_DATA = 'ADD_NEW_DATA';
export const HANDLE_BUDGET = 'HANDLE_BUDGET';
export const HANDLE_BIDDING = 'HANDLE_BIDDING';
export const HANDLE_VENDOR = 'HANDLE_VENDOR';
export const HANDLE_ORDER = 'HANDLE_ORDER';
export const HANDLE_ORGANISATION = 'HANDLE_ORGANISATION';
export const HANDLE_PERMISSION = 'HANDLE_PERMISSION';

export function addData(data) {
  return {
    type: ADD_DATA,
    data,
  };
}

export function addNewData(newData) {
  return {
    type: ADD_NEW_DATA,
    newData,
  };
}

export function handleBudget(value) {
  return {
    type: HANDLE_BUDGET,
    value,
  };
}

export function handleBiddingAction(value) {
  return {
    type: HANDLE_BIDDING,
    value,
  };
}

export function handleVendorAction(value) {
  return {
    type: HANDLE_VENDOR,
    value,
  };
}

export function handleOrderAction(value) {
  return {
    type: HANDLE_ORDER,
    value,
  };
}

export function handleOrganisationAction(value) {
  return {
    type: HANDLE_ORGANISATION,
    value,
  };
}

export function handlePermissionAction(value) {
  return {
    type: HANDLE_PERMISSION,
    value,
  };
}
