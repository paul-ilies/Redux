import { createSelector } from 'reselect';

export const selectItems = (state) => state.items;
export const selectItem = (state, props) =>
  state.items.find((el) => el.uuid === props.uuid);
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);
