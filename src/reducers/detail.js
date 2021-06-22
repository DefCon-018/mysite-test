import {
  HANDLE_BIDDING,
  HANDLE_BUDGET,
  HANDLE_ORDER,
  HANDLE_ORGANISATION,
  HANDLE_PERMISSION,
  HANDLE_VENDOR,
} from '../actions';

let initialState = {
  budget: 0,
  bidding: 0,
  vendorPortal: 0,
  purchaseOrder: 0,
  organisation: 0,
  permission: 0,
};

export default function details(state = initialState, action) {
  switch (action.type) {
    case HANDLE_BUDGET:
      return {
        ...state,
        budget: action.value,
      };
    case HANDLE_BIDDING:
      return {
        ...state,
        bidding: action.value,
      };
    case HANDLE_ORDER:
      return {
        ...state,
        purchaseOrder: action.value,
      };
    case HANDLE_ORGANISATION:
      return {
        ...state,
        organisation: action.value,
      };
    case HANDLE_PERMISSION:
      return {
        ...state,
        permission: action.value,
      };
    case HANDLE_VENDOR:
      return {
        ...state,
        vendorPortal: action.value,
      };
    default:
      return state;
  }
}
