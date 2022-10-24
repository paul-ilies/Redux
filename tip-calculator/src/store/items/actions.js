export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const ITEM_UPDATED = 'ITEM_UPDATED';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});
export const removeItem = (uuid) => {
  return {
    type: ITEM_REMOVED,
    payload: { uuid }
  };
};
export const updateItemPrice = (uuid, price) => {
  return {
    type: ITEM_UPDATED,
    payload: { uuid, price }
  };
};
export const updateItemQuantity = (uuid, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { uuid, quantity }
  };
};
