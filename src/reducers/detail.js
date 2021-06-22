let initialState = {
  budget: {
    operations: {
      view: 1,
      create: 1,
      edit: 1,
      delete: 1,
    },
    cnt: 4,
    open: 0,
  },
  bidding: {
    operations: {
      view: 0,
      create: 0,
      edit: 0,
      delete: 0,
    },
    cnt: 0,
    open: 0,
  },
  vendorPortal: {
    operations: {
      view: 1,
      create: 1,
      edit: 0,
      delete: 0,
    },
    cnt: 2,
    open: 0,
  },
  purchaseOrder: {
    operations: {
      view: 1,
      create: 1,
      edit: 0,
      delete: 0,
    },
    cnt: 2,
    open: 0,
  },
  organisation: {
    operations: {
      view: 1,
      create: 1,
      edit: 1,
      delete: 1,
    },
    cnt: 4,
    open: 0,
  },
  permission: {
    operations: {
      view: 0,
      create: 0,
      edit: 0,
      delete: 0,
    },
    cnt: 0,
    open: 0,
  },
};

export default function details(state = initialState, action) {}
