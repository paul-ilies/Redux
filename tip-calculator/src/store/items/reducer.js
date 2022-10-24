import { produce } from 'immer';
import {
  ITEM_ADDED,
  ITEM_REMOVED,
  ITEM_UPDATED,
  UPDATE_QUANTITY
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    state.push(item);
  }
  if (action.type === ITEM_REMOVED) {
    return state.filter((el) => el.uuid !== action.payload.uuid);
  }
  if (action.type === ITEM_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10);
  }
  if (action.type === UPDATE_QUANTITY) {
    const item = state.find((el) => el.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10);
  }
  return state;
}, initialItems);

export default reducer;
