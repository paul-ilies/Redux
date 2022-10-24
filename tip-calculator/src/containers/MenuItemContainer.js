import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updateItemPrice,
  updateItemQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selectors';
const mapStateToProps = (state, props) => {
  return { total: selectItemTotal(state, props) };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updateItemPrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateItemQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
