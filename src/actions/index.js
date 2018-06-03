import * as Types from './../constants/ActionTypes';

export const actAddToCart = (product, quantity) => ({
    type: Types.ADD_TO_CART,
    product,
    quantity
});

export const actRemoveProductInCart = (product) => ({
    type: Types.DELETE_PRODUCT_IN_CART,
    product
})

export const actUpdateProductInCart = (product, quantity) => ({
    type: Types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
})

export const actChangeMessage = (message) => ({
    type: Types.CHANGE_MESSAGE,
    message
});
