import * as Types from './../constants/ActionTypes';
import _ from 'lodash';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var index = -1;
    let { product, quantity } = action;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = _.findIndex(state, (itemProduct) => (
                itemProduct.product.id === product.id
            ));
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }

            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = _.findIndex(state, (itemProduct) => (
                itemProduct.product.id === product.id
            ));
            if (index !== -1) {
                state.splice(index, 1);
            }

            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = _.findIndex(state, (itemProduct) => (
                itemProduct.product.id === product.id
            ));
            if (index !== -1) {
                state[index].quantity = quantity;
            }

            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];
        default:
            return state;
    }
}

export default cart;